import React from 'react'
import Layout from '../components/Layout'
import CV from '../components/CV'
import { useSiteMetadata } from '../hooks'

const CvTemplate = () => {
  const { author } = useSiteMetadata()

  return (
    <Layout title={`${author.name} | CV`} className="bg-black">
      <CV />
    </Layout>
  )
}

export default CvTemplate
