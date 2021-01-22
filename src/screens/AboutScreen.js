import React from 'react'
import { Container, Row, Col, Jumbotron, ListGroup } from 'react-bootstrap'

const AboutScreen = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Jumbotron className='about-jumbo'>
              <Container className='text-center'>
                <h1>About</h1>
                <ListGroup className='mx-auto about-list' variant='flush'>
                  <ListGroup.Item>Crypto Wise</ListGroup.Item>
                  <ListGroup.Item>Version 2.0</ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      href='mailto:sam@samklepper.com'
                      target='_blank'
                      rel='noreferrer'>
                      sam@samklepper.com
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutScreen
