import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Jumbotron } from 'react-bootstrap'
import NewsListItem from './NewsListItem'

const NewsApp = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=407ce028abe941a672ad85f05150bc2b5794946edb2240e32d61e2e64f57d21e`
      )
      .then((response) => {
        setData(response.data)
        console.log(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (loading) {
    return <p>Loading news...</p>
  }

  return (
    <div className='container mt-3 text-center'>
      <Jumbotron fluid>
        <h1 className='text-info'>Crypto News</h1>
      </Jumbotron>

      <Row>
        <br />
        <Col>
          <section>
            {data.Data.map((n, id) => (
              <NewsListItem key={id} n={n} />
            ))}
          </section>
        </Col>
      </Row>
    </div>
  )
}

export default NewsApp
