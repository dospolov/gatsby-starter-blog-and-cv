import React from 'react'
import { Layout } from 'antd'
import Header from './Header'
import Sidebar from '../Sidebar'
import TopTech from './TopTech'
import SkillList from './SkillList'
import Experience from './Experience'
import PitchLine from './PitchLine'
import Volunteer from './Volunteer'
import Education from './Education'
import Experiments from './Experiments'
import Recommendations from './Recommendations'
import Footer from './Footer'
import data from './data.json'

const { Content } = Layout
const CV = () => (
  <>
    <Sidebar hideMobile={true} />
    <Content className="m-5">
      {data.header && <Header header={data.header} />}
      {data.experiments && (
        <Experiments experiments={data.experiments} tech={data.tech} />
      )}
      {data.pitchLine && <PitchLine pitchLine={data.pitchLine} />}
      {data.tech && data.topTech && <TopTech topTech={data.topTech} tech={data.tech} />}
      {data.skills && <SkillList skills={data.skills} />}
      {data.experience && <Experience experience={data.experience} />}
      {data.volunteer && <Volunteer volunteer={data.volunteer} />}
      {data.education && <Education education={data.education} />}
      {data.recommendations && <Recommendations recommendations={data.recommendations} />}
      {data.footer && <Footer footer={data.footer} />}
    </Content>
  </>
)

export default CV
