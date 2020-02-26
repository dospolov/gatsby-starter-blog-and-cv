import React from 'react'
import { Link } from 'gatsby'
import { Tag } from 'antd'

const Tags = ({ tags, tagSlugs }) =>
  tagSlugs &&
  tagSlugs.map((slug, i) => (
    <Link to={slug} key={tags[i]}>
      <Tag className="cursor-pointer">{tags[i]}</Tag>
    </Link>
  ))

export default Tags
