import React from 'react'

const Icon = ({ icon }) => (
  <svg className="h-8 w-8 fill-current" viewBox={icon.viewBox}>
    <path d={icon.path} />
  </svg>
)

export default Icon
