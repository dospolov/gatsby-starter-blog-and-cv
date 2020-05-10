import React from 'react'
import { Card, Col, Divider, Row, Avatar } from 'antd'

const Recommendations = ({ recommendations }) => (
  <>
    <h3 className="text-center mt-1 mb-0">Recommendations</h3>
    <Card>
      {recommendations.map((rec, i) => (
        <Row type="flex" justify="space-around" key={i} className="text-lg">
          <Divider orientation="left" className={i === 0 && 'mt-0'} />
          <Col span={5}>
            <h3 className="mb-0">{rec.name}</h3>
            <p>{rec.jobTitle}</p>
            <Avatar
              icon={<img src={`/people/${rec.photo}`} />}
              alt={rec.name}
              size={50}
            />
          </Col>
          <Col span={17}>
            <h3>
              {rec.text.split('\n').map((text, i) => {
                return (
                  <div key={i} className="pb-3">
                    {text}
                  </div>
                )
              })}
            </h3>
          </Col>
        </Row>
      ))}
    </Card>
  </>
)

export default Recommendations
