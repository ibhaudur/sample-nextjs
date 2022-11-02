import React, { useState } from 'react'
import Meta from '../Component/meta'
import styles from '../styles/Home.module.css'
import {Form, Row, Col, Button} from 'react-bootstrap'

function Page2() {
  const initialState = {
    family_id:'',
    family_name:''
  }
  const [family,setfamily] = useState(initialState);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setfamily({ ...family, [name]: value });
  };

  const Call = async (e) => {
    e.preventDefault();
    console.log(family);
    const resp = await fetch(`http://54.164.158.217:3000/api/family`,{
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(family)
    })
    if(resp.status === 200){
      alert("Successfully Added");
      setfamily(initialState)
    }
    
  }
  return (
    <div className={styles.container}>
      
<Meta title='Post'/>
<h1>Post </h1>
      <Row className='justify-content-center mt-5'>
        <Col md={6}>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Id</Form.Label>
        <Form.Control type="text" name="family_id" value={family.family_id} onChange={handlechange} placeholder='Enter Your Id'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='family_name' value={family.family_name} onChange={handlechange} placeholder='Enter your Name'/>
      </Form.Group>
      
    </Form>
    <Button onClick={Call}>Add</Button>
        </Col>
      </Row>
      
        </div>
  )
}

export default Page2