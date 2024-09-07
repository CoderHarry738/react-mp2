import React from "react";
import Nav from "react-bootstrap/Nav";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Nav className="navb justify-content-center " activeKey="/home">
        <Nav.Item className=" my-2 ">
          <Nav.Link className="font1" href="#home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className=" my-2 ">
          <Nav.Link className="font1" href="#about">
            Hogwarts
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-2 ">
          <Nav.Link className="font1" href="#spells">
            Spell
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-2 ">
          <Nav.Link className="font1" href="#contacts">
            Contacts
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Header;
