import React from 'react'
import { Card, Col, Divider, Row } from 'antd'

const Volunteer = ({ volunteer }) => (
  <>
    <h3 className="text-center mt-1 mb-0">Volunteer</h3>
    <Card>
      {volunteer.map((activity, i) => (
        <Row type="flex" justify="space-around" key={activity.place} className="text-lg">
          <Divider orientation="left" className={i === 0 && 'mt-0'}>
            {activity.period}
          </Divider>
          <Col span={6}>
            <img
              src={`/companies/${activity.logo}`}
              alt={activity.place}
              className="max-w-3/4 inline"
            />
          </Col>
          <Col span={17}>
            <h3>{activity.description}</h3>
          </Col>
        </Row>
      ))}
    </Card>
  </>
)

export default Volunteer
