import React from 'react'
import { Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <Nav className='bg-light flex-column text-center mt-5' activeKey='/home'>
        <Nav.Item>
          <Nav.Link href='/'>
            <h6 className='mt-3 logo'>Crypto Wise</h6>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <a href='mailto:sam@samklepper.com' target='_blank' rel='noreferrer'>
            sam@samklepper.com
          </a>{' '}
          © / 2021
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/news'> News</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/about'>About</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Footer
