import React, { useState, useContext } from "react";
import { browserHistory } from "react-router";
import { Nav, NavItem, NavLink } from "reactstrap";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from '../Structure/Footer';
import Header from '../Structure/Header';
const Main = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="main">
      <header style={{ width: "100%", padding: "10px 40px" }}>
        <Nav
          style={{
            width: "80%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            color: "#eee",
          }}
          pills
        >
          <NavItem>
            <NavLink color="white" active href="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink color="white" href="#">
              Brewery
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About Us</NavLink>
          </NavItem>
        </Nav>
      </header>
      <Home />

      <footer></footer>
    </div>
  );
};

export default Main;
