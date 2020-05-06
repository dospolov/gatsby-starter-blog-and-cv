import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Divider, Row, Col, Tag } from 'antd'
import { SelectOutlined } from '@ant-design/icons'
import { Link } from 'gatsby'
import Tags from './Tags'
import getCategoryColor from '../../utils/get-category-color'

dayjs.extend(relativeTime)

const Feed = ({ edges, allCategories }) =>
  edges.map(edge => {
    const {
      node: {
        html,
        fields: { slug, categorySlug, tagSlugs },
        frontmatter: { date, category, tags, priority }
      }
    } = edge
    let {
      node: {
        frontmatter: { title }
      }
    } = edge
    const featured = priority > 0
    const imgFound = html && html.match(/<img\s+[^>]*?src=("|')([^"']+)/i)
    const imgSrc = imgFound && imgFound[2]
    const categoryColor = getCategoryColor({ allCategories, category })
    let externalLink = null

    const isTitleLinkPattern = /(?=.*\[)(?=.*\])(?=.*\()(?=.*\))/i
    if (isTitleLinkPattern.test(title)) {
      const found = title.match(/\[(.*)]\((.*)\)/)
      title = found[1]
      externalLink = found[2]
    }

    return (
      <div className={`post ${featured && 'post-featured'} relative`} key={slug}>
        {featured && (
          <div className="ribbon">
            <span>featured</span>
          </div>
        )}
        <Row>
          {imgSrc && (
            <Col xs={24} sm={24} md={4} lg={4} xl={4}>
              <Link to={slug}>
                <img src={imgSrc} alt="" title="" className="mb-5 poster" />
              </Link>
            </Col>
          )}
          <Col
            xs={24}
            sm={24}
            md={{
              span: imgSrc ? 19 : 24,
              offset: imgSrc ? 1 : 0
            }}
            lg={{
              span: imgSrc ? 19 : 24,
              offset: imgSrc ? 1 : 0
            }}
            xl={{
              span: imgSrc ? 19 : 24,
              offset: imgSrc ? 1 : 0
            }}
          >
            <Row>
              <Col span={8}>
                <Link to={categorySlug} className="">
                  <Tag
                    className={`bg-${categoryColor} text-white border-transparent cursor-pointer px-4 py-1 rounded-full text-base font-semibold`}
                  >
                    {category}
                  </Tag>
                </Link>
              </Col>
              <Col span={16} className="text-right">
                {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
              </Col>
            </Row>
            <h1 className="text-5xl mt-3 mb-0">
              {externalLink ? (
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  <SelectOutlined className="text-3xl" /> {title}
                </a>
              ) : (
                <Link to={slug} className="text-black">
                  {title}
                </Link>
              )}
            </h1>
            <p className="text-gray-500 text-right">
              Posted{' '}
              <time dateTime={dayjs(date).format('MMMM D, YYYY')}>
                {dayjs(date).fromNow()}
              </time>
            </p>
          </Col>
        </Row>

        <Divider className={`bg-gray-300 mb-0 mt-6 ${featured && 'invisible'}`} />
      </div>
    )
  })

export default Feed
