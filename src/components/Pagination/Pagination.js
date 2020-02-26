import React from 'react'
import { Row, Col } from 'antd'
import { Link } from 'gatsby'
import { PAGINATION } from '../../constants'

const Pagination = ({ prevPagePath, nextPagePath, hasNextPage, hasPrevPage }) => {
  return (
    <Row>
      <Col span={12}>
        {hasPrevPage && (
          <Link rel="prev" to={prevPagePath} className="">
            {PAGINATION.PREV_PAGE}
          </Link>
        )}
      </Col>
      <Col span={12} className="text-right">
        {hasNextPage && (
          <Link rel="next" to={nextPagePath} className="">
            {PAGINATION.NEXT_PAGE}
          </Link>
        )}
      </Col>
    </Row>
  )
}

export default Pagination
