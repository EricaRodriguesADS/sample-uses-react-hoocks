import React from 'react'
import Layout from '../components/Layout'
import { Container, Row, Col } from 'react-bootstrap';
import ReactBootstrap from '../images/react-bootstrap.png'

const Home = () =>{
    return (
      <Layout>
        <Container>
          <Row>
            <Col sm={12}> 
              <img
                width={"100%"}
                height={"100%"}
                src={ReactBootstrap}
                alt="React + Bootstrap"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}> 
                In this branch I will show small examples using React + bootstarp
            </Col>
            <Col sm={12}> 
                =====================================================
            </Col>
            <Col sm={12}> 
                Nessa branch, mostrarei pequenos exemplos usando React + bootstarp
            </Col>
          </Row>
        </Container>
      </Layout>
    );
}

export default Home;