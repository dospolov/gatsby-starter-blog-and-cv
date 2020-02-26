import React from 'react'
import { useSiteMetadata } from '../../hooks'

const Copyright = () => {
  const { copyright } = useSiteMetadata()
  return <div className="text-center">{copyright}</div>
}

export default Copyright
