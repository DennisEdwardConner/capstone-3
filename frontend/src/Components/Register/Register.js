import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { baseUrl } from '../../Shared/baseUrl'
import axios from 'axios'

const Register = ()=>{

    // const {userName,token} =useContext(GlobalContext)
   const initialState ={
    username:'',
    password:'',
    confirmPassword:'',
    
   }
    const  [state,setstate]= useState(initialState)
    const [userRole,setUserRole]= useState('')


   const handleInputChange = (event) => {
        event.preventDefault()
        if(event.target.name==="username"){
            setstate({...state,username:event.target.value})
        }else if(event.target.name==="password"){
            setstate({...state,password:event.target.value})
        }else if(event.target.name==="confirmPassword"){
            setstate({...state,confirmPassword:event.target.value})
        }else if(event.target.name==='role'){
                setUserRole(event.target.value)
        }
       
    }

   const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { ...state,role:userRole}

        console.log(state,userRole,'state=====');
        if(state.password===state.confirmPassword){
            console.log('data====',data);
      const response = await axios.post(baseUrl + "/register",data)
    console.log(response,'response=====');    
    }else{
            alert("Password and Confirm Password must match!!!")
        }
    }

        return(
            <div style={{width:'250px',margin:'20px'}}>
                <h1>Create Account</h1>
                <label class="sr-only">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    class="form-control"
                    placeholder="Username"
                    onChange={handleInputChange}
                    v
                    required
                />
                <label class="sr-only">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control"
                    placeholder="Password"
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="password"
                    id="password-confirm"
                    name="confirmPassword"
                    class="form-control"
                    placeholder="Confirm Password"
                    onChange={handleInputChange}
                    required
                />
                <div style={{display:'flex', margin:'10px 10px 10px 0',gap:'5px'}}>
                <label>Role</label>
                <select name='role' onChange={handleInputChange} defaultValue={userRole} >
                    <option selected={userRole===""}>--select--</option>
                    <option value='beer lover' selected={userRole==='beer lover'}>Beer Lover</option>
                    <option value={"brewery owner"} selected={userRole==="brewery owner"}>Brewery Owner</option>
                    {/* <option value={"admin"} selected={userRole==="admin"}>Admin</option> */}
                </select>
                </div>

                <br></br>
                <Link to="/login">Have an account?</Link>
                <button type="submit" onClick={handleSubmit}>Sign in</button>
            </div>
        )
    }


export default Register;