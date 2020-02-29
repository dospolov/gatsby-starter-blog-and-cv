import React from 'react'
import { Row, Col } from 'antd'
import data from './data.json'

const TopSkills = () => (
  <div className="mt-16 mb-5">
    <Row type="flex" justify="space-around">
      {Object.values(data.tech).map(
        tech =>
          tech.displayInTopList && (
            <Col
              xs={6}
              sm={6}
              md={3}
              lg={3}
              xl={3}
              className="text-center my-1"
              key={tech.name}
            >
              <a href={tech.website} target="_blank" rel="noopener noreferrer">
                <img
                  src={`/tech/${tech.logo}`}
                  alt={tech.name}
                  height={40}
                  className="max-w-3/4"
                />
                <h5>{tech.name}</h5>
              </a>
            </Col>
          )
      )}
    </Row>
  </div>
)

export default TopSkills
