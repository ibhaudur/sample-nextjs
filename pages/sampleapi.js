import React from 'react'
import { Card } from 'react-bootstrap'
import style from '../styles/Home.module.css'
import {Row, Col } from 'react-bootstrap'

function sampleapi({article}) {
  return (
    <div>
          <Row>

      {
        article.map((a,i)=> {
          return (
            <Col md={4}>
            <Card key={i} className={style.card}>
            <h3>{a.title}</h3>
            <p>{a.body}</p>
            </Card>
            </Col>
          )
        })
      }
      </Row>
    </div>
  )
}

export default sampleapi

export const getStaticProps = async () => {
                    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')

                    const article = await response.json()
                    return {
                                        props : {article}
                    }
}