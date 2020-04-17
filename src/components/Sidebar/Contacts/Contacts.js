import React from 'react'
import { getContactHref, getIcon } from '../../../utils'

const Contacts = ({ contacts }) => (
  <div className="text-center">
    <ul className="p-0">
      {Object.keys(contacts).map(
        name =>
          contacts[name] && (
            <li key={name} className="inline-block overflow-hidden m-2 leading-none">
              <a
                className="text-white inline-block leading-none"
                href={getContactHref(name, contacts[name])}
                rel="noopener noreferrer"
                target="_blank"
              >
                {getIcon(name)}
              </a>
            </li>
          )
      )}
    </ul>
  </div>
)

export default Contacts
