import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout

const Page = ({ title, children }) => (
  <Content className="text-lg p-5">
    {title && <h1 className="">{title}</h1>}
    <div className="">{children}</div>
  </Content>
)

export default Page
