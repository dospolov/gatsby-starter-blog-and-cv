import React from 'react'
import Icon from '@ant-design/icons'

const Telegram = () => (
  <svg
    data-icon="telegram"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M9.417 15.181l-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931L23.93 3.821l.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693L18.953 5.78c.595-.394 1.136-.176.691.218z"></path>
  </svg>
)

const TelegramIcon = props => <Icon component={Telegram} {...props} />

export default TelegramIcon
