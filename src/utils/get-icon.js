import React from 'react'
import {
  TwitterOutlined,
  GithubOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  MailOutlined
} from '@ant-design/icons'
import TelegramIcon from '../components/CustomIcons/Telegram'
import RssIcon from '../components/CustomIcons/Rss.js'

const getIcon = name => {
  let icon

  switch (name) {
    case 'twitter':
      icon = <TwitterOutlined />
      break
    case 'github':
      icon = <GithubOutlined />
      break
    case 'facebook':
      icon = <FacebookOutlined />
      break
    case 'linkedin':
      icon = <LinkedinOutlined />
      break
    case 'instagram':
      icon = <InstagramOutlined />
      break
    case 'telegram':
      icon = <TelegramIcon />
      break
    case 'email':
      icon = <MailOutlined />
      break
    case 'rss':
      icon = <RssIcon />
      break
    default:
      icon = ''
      break
  }

  return <>{icon}</>
}

export default getIcon
