import React from 'react'
import { Link } from 'gatsby'

const Menu = ({ menu }) => (
  <nav className="sidebar-navigation">
    <ul className="list-none pl-0">
      {menu.map(item => (
        <li className="mb-3" key={item.path}>
          <Link to={item.path} className="" activeClassName="current-page">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Menu
