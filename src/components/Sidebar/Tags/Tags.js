import React from 'react'
import { Link } from 'gatsby'
import { Tag } from 'antd'
import { useTagsList } from '../../../hooks'

const Tags = () => {
  const tags = useTagsList()
  return (
    <nav className="mt-20">
      <h4 className="uppercase text-gray-300">Tags</h4>
      {tags.map(tag => (
        <Link
          key={tag.fieldValue}
          to={`/tag/${tag.fieldValue}`}
          className="align-bottom"
          activeClassName="current-page"
        >
          <Tag>{tag.fieldValue}</Tag>
        </Link>
      ))}
    </nav>
  )
}

export default Tags
