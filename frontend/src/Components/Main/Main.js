import React, { useState, useContext } from "react";
import { browserHistory } from "react-router";
import { Nav, NavItem, NavLink } from "reactstrap";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
const Main = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="main">
      <header style={{ width: "100%", padding: "10px 40px" }}>
        {/*<Nav
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
          <NavItem>
            <NavLink
              className="nav-link"
              onClick="NavigateToNewTab"
              to="/breweryMap.html"
            >
              <span className="fa fa-map fa-lg"></span>Brewery Map
            </NavLink>
          </NavItem>
        </Nav>*/}
        <Nav
          style={{
            width: "80%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            color: "#eee",
          }}
        >
          <NavItem>
            <NavLink className="nav-link" 
            onClick= "NavigateToNewTab"
            to="/home">
              <span className="fa fa-home fa-lg"></span>Home
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link" to="/">
              <span className="fa fa-info fa-lg"></span>Account
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link" to="/">
              <span className="fa fa-list fa-lg"></span>Reviews
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link" to="/">
              <span className="fa fa-address-card fa-lg"></span>Help
            </NavLink>
          </NavItem>

          <NavItem>
          <NavLink
              className="nav-link"
              onClick="NavigateToNewTab"
              to="/breweryMap.html"
            >
              <span className="fa fa-map fa-lg"></span>Brewery Map
            </NavLink>
          </NavItem>
        </Nav>
      </header>
      <Home />

      <footer></footer>
    </div>
  );
};

export default Main;
