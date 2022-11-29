import React,{useState, useContext} from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom'
import {Nav,NavItem,NavLink} from 'reactstrap';
import Home2 from "../Home/Home2"
// import Login from '../Login/Login'
// import Register from '../Register/Register';
const Main = ()=>{


        return (
            <div>
                <header style={{width:'100%'}}>
                    <Nav style={{width:'100%'}} pills>
                      <NavItem>
                        <NavLink
                          active
                          href="/"
                        >
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                          Brewery
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                          Contact
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="#"
                        >
                        About Us
                        </NavLink>
                      </NavItem>
                    </Nav>

                </header>
{/* <Register/>
<Login/> */}
<Home2 />

                <footer></footer>
            </div> 
        );




    }



export default Main;
