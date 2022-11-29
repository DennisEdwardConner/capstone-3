import React,{useState, useContext} from 'react';
import { browserHistory } from 'react-router';
import {Nav,NavItem,NavLink} from 'reactstrap';
import Home from "../Home/Home"
import Login from '../Login/Login'
import Register from '../Register/Register';
const Main = ()=>{

  const  [isRegister,setIsRegister] =useState(false)

        return (

                < div className='main'>
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
                  <Home/>

                
                        
                <footer></footer>
                </div>      );




    }



export default Main;
