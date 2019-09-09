import React, {useState} from 'react'
import Layout from '../components/Layout'
import ModalRegister from '../components/Modals/ModalRegister'

import { Row, Col, Card, Table, Nav} from 'react-bootstrap';

const people = [
  {FirstName: "Mark", LastName: "Otto", Username: "@mdo"},
  {FirstName: "Jacob", LastName: "Thornton", Username: "@fat"},
  {FirstName: "Larry", LastName: "The Bird", Username: "@twitter"},
];

const List = () =>{

   const [data] = useState(people);
   const [person, setPerson] = useState({FirstName: "", LastName: "", Username: "", status: false});

    const updateData = (id)=>{
        const prepararData = data[id];
        setPerson({...prepararData, status:true})
    }

    return (
      <Layout>
        <Card key="register" style={{padding:10}}>
          <Row>
            <Col sm={12}><h3 style={{textAlign:"center"}}>Users List</h3></Col>
          </Row>
          <Row  >
            <Col sm={12}>
            <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>       
                  {
                    data.map((p, i)=>
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{p.FirstName}</td>
                      <td>{p.LastName}</td>
                      <td>{p.Username}</td>
                      <td>
                        <Nav.Item>
                           <Nav.Link href="#"  onClick={()=>updateData(i)} >View</Nav.Link>
                        </Nav.Item>
                      </td>
                    </tr>
                    )
                  }
                </tbody>
              </Table>
            </Col>
          </Row>
          <ModalRegister data={person}/>
        </Card>
      </Layout>
    );
}

export default List;