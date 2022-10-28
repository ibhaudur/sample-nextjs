import React from 'react'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/Home.module.css'
import Link from 'next/link'
import { Row, Col, Container } from 'react-bootstrap';


function Layout({children}) {
  return (
    <div>
      <Nav/>
      <Row className='justify-content-center'>
        <Col md={2}>
        <div className={style.Sidebar}>
        <ul>
        <Link className={style.link} href='/'>
        <li>
                                        <span>Home</span>

                                        </li>
                                        </Link>
                                        <Link href='/Page1'>
                                        <li>
                                        <span>About</span>

                                        </li>
                                        </Link>
                                        <Link href='/Page2'>
                                        <li>
                                        <span>Page</span>

                                        </li>
                                        </Link>
                                        <Link href='/sampleapi'>
                                        <li>
                                       <span>API</span>

                                        </li>
                                        </Link>
        </ul>
      </div>
        </Col>
        <Col md={10} className="mt-5">
          <Container className='mt-5'>
          {children}

          </Container>

        </Col>
      </Row>
      
       
    </div>
  )
}

export default Layout