import React from 'react'
import { Row, Col } from 'antd'

const Header = () => (
  <Row type="flex" justify="space-around" align="middle">
    <Col span={2} className="hide-mobile">
      <a href="/cv.pdf" target="_blank" className="no-print">
        <img src="/logos/pdf.svg" height="50" alt="pdf icon" />
      </a>
    </Col>
    <Col span={8} className="text-right">
      <h2 className="text-2xl">MARAT DOSPOLOV</h2>
      <h5>JAVASCRIPT TECH LEADER</h5>
    </Col>
    <Col span={4} className="text-center">
      <a href="/">
        <img
          src="/photo.jpg"
          alt="Marat Dospolov"
          width={80}
          className="rounded-full max-w-3/4"
        />
      </a>
    </Col>
    <Col span={10} className="text-lg">
      <div>Ukraine, Kyiv</div>
      <div>
        telegram:{' '}
        <a href="https://t.me/dospolov" target="_blank" rel="noopener noreferrer">
          dospolov
        </a>
      </div>
      <div>
        github: <a href="https://github.com/dospolov">dospolov</a>
      </div>
    </Col>
  </Row>
)

export default Header
