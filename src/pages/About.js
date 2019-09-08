import React from 'react'
import Layout from '../components/Layout'
import { Row, Col, Card } from 'react-bootstrap';
import Main from '../images/main.png'
const About = () =>{
    return (
      <Layout>
        <Card style={{padding:10}}>
          <Row  >
            <Col sm={12}>
              <h1 style={{textAlign:"center"}}>Sample project</h1>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div>
                <p>1. Creating routes using "npm i wouter". Below follows the example:</p>
                <Col sm={12} > 
                  <img
                    width={"100%"}
                    height={"100%"}
                    src={Main}
                    alt="Wouter"
                    style={{maxHeight:500,maxWidth:500}}
                  />    
                </Col>
              </div>
            </Col>
          </Row>
        </Card>
      </Layout>
    );
}

export default About;