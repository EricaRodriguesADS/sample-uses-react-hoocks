import React from 'react';
import { Nav } from 'react-bootstrap';

const Menu = () => {
    return (
      <Nav
        activeKey="/"
      >
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  href="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>
    )
};

export default Menu;