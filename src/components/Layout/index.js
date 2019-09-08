import React, {useEffect, useState} from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Menu from './Menu'

const Layout = (props)=> {
  const [status, setStatus] = useState(false);

    useEffect(() => {
        setStatus(true);

        return ()=>{
          setStatus(false);
        }
    },[]);

    if(!status){
      return <Spinner animation="border" role="status" style={{marginLeft:"50%", marginTop:"20%"}}>
        <span className="sr-only">Loading...</span>
      </Spinner>
    }

    return (
      <Container>
        <Menu/>
        {props.children}
      </Container>
    )
};

export default Layout