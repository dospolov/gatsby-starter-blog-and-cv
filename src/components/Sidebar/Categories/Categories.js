import React from 'react'
import { Link } from 'gatsby'
import { CATEGORIES } from '../../../constants'
import { useCategoriesList } from '../../../hooks'

const getLinkFromCategoryName = categoryName =>
  categoryName.toLowerCase().replace(/ /i, '-')

const Categories = () => {
  const categories = useCategoriesList()
  return (
    <nav className="sidebar-navigation mt-20">
      <h4 className="uppercase text-gray-300">Categories</h4>
      <ul className="list-none pl-0">
        {categories.map(category => (
          <li className="mb-3" key={category.fieldValue}>
            <Link
              to={`/category/${getLinkFromCategoryName(category.fieldValue)}`}
              className="align-bottom capitalize"
              activeClassName="current-page"
            >
              <span
                className={`bg-${
                  CATEGORIES[category.fieldValue]
                } rounded-full w-4 h-4 inline-block mr-2`}
              />
              {category.fieldValue}
              <span className="text-lg inline-block ml-2 text-gray-300 font-light">
                {category.totalCount}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Categories
