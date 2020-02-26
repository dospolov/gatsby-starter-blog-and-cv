import React from 'react'
import { Layout } from 'antd'
import Header from './Header'
import Sidebar from '../Sidebar'
import TopSkills from './TopSkills'
import SkillList from './SkillList'
import Experience from './Experience'
import PitchLine from './PitchLine'
import Volunteer from './Volunteer'
import Education from './Education'
import Experiments from './Experiments'
import Footer from './Footer'

const { Content } = Layout

const CV = () => (
  <>
    <Sidebar hideMobile={true} />
    <Content className="m-5">
      <Header />
      <Experiments />
      <PitchLine />
      <TopSkills />
      <SkillList />
      <Experience />
      <Volunteer />
      <Education />
      <Footer />
    </Content>
  </>
)

export default CV
