import React from 'react'
import dayjs from 'dayjs'
// import readingTime from 'reading-time'

const Content = ({ body, title, date }) => (
  <div className="">
    <h1 className="text-5xl mt-3 mb-0">{title}</h1>
    <p className="text-gray-500">
      Posted on{' '}
      <time dateTime={dayjs(date).format('MMMM D, YYYY')}>
        {dayjs(date).format('MMMM DD, YYYY')}
      </time>{' '}
      {/* | {readingTime(body).text} */}
    </p>
    <div className="" dangerouslySetInnerHTML={{ __html: body }} />
  </div>
)

export default Content
