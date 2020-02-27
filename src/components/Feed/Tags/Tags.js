import React from 'react'
import { Link } from 'gatsby'
import { Tag } from 'antd'

const removeDashes = slug => slug.toLowerCase().replace(/-/i, ' ')

const Tags = ({ tags, tagSlugs }) =>
  tagSlugs &&
  tagSlugs.map((slug, i) => (
    <Link to={slug} key={tags[i]}>
      <Tag className="cursor-pointer">{removeDashes(tags[i])}</Tag>
    </Link>
  ))

export default Tags
