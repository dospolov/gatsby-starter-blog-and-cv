import React from 'react'
import dayjs from 'dayjs'

const Meta = ({ date }) => (
  <div className="">
    <p className="">Published {dayjs(date).format('D MMM YYYY')}</p>
  </div>
)

export default Meta
