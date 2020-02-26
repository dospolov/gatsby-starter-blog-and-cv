import React from 'react'
import { Card, Row, Col, Tag } from 'antd'
import data from './data'

const SkillList = () => (
  <div>
    <Row type="flex" justify="space-around">
      <Col span={11}>
        <h3 className="text-center mt-10 mb-5">Soft skills</h3>
      </Col>
      <Col span={11} offset={1}>
        <h3 className="text-center mt-10 mb-5">Hard skills</h3>
      </Col>
    </Row>
    <Card className="">
      <Row type="flex" justify="space-around">
        <Col span={11}>
          <div>
            {data.skills.soft.map(skillData => (
              <Tag color="#722ed1" key={skillData.skillText} className="mb-1 text-base">
                {skillData.skillText}
              </Tag>
            ))}
          </div>
          {data.skills.otherSoft.map(skill => (
            <Tag color="purple" key={skill} className="mb-1 text-base">
              {skill}
            </Tag>
          ))}
        </Col>
        <Col span={11} offset={1}>
          <div>
            {data.skills.hard.map(skillData => (
              <Tag color="#1890ff" key={skillData.skillText} className="mb-1 text-base">
                {skillData.skillText}
              </Tag>
            ))}
          </div>
          {data.skills.otherHard.map(skill => (
            <Tag color="blue" key={skill} className="mb-1 text-base">
              {skill}
            </Tag>
          ))}
        </Col>
      </Row>
    </Card>
  </div>
)

export default SkillList
