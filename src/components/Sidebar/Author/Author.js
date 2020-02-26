import React from 'react'
import { withPrefix, Link } from 'gatsby'

const Author = ({ author }) => (
  <div className="text-center pt-5">
    <Link to="/">
      <img
        className="rounded-full"
        src={withPrefix(author.photo)}
        width={85}
        alt={author.name}
      />
    </Link>
    <h2 className="text-white mt-5">{author.name}</h2>
    <p className="text-gray-300">{author.bio}</p>
  </div>
)

export default Author
