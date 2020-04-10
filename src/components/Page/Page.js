import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout

const Page = ({ title, children }) => (
  <Content className="text-lg">
    {title && <h1 className="post">{title}</h1>}
    <div className="">{children}</div>
  </Content>
)

export default Page
