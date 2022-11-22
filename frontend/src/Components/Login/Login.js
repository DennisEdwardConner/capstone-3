import React,{useState, useContext} from 'react';
import {GlobalContext, GlobalUpdateContext } from '../../context/globalContext';
import axios from 'axios';
import { baseUrl } from '../../Shared/baseUrl'
import { Link } from 'react-router-dom';


const Login = ()=>{


    const {setToken,setUserName} =useContext(GlobalUpdateContext)
    const {userName,token} =useContext(GlobalContext)
    const  [user,setUser]= useState('')
    const  [userPass,setUserPass]= useState('')
    const [isLoggedIn,setIsLoggedIn] = useState(false);


    const handleInputChange=(event)=>{
        event.preventDefault();
        if(event.target.name==="username"){
            console.log('user')
            setUser(event.target.value)
        }else if(event.target.name==="password"){
            setUserPass(event.target.value)
     console.log('pass')
        }
      
    }

    const submitHandler= async(e)=>{
        e.preventDefault();
        const data = {
     username:user, password:userPass
        }
        console.log(data,'datta===')
     const userWithToken= await axios.post(baseUrl+"/login",data)
     console.log('token====',userWithToken?.data?.token);
     setToken(userWithToken?.data?.token);
     setUserName(userWithToken?.data?.user?.username)
     localStorage.setItem('token',JSON.stringify(userWithToken?.data?.token));
     localStorage.setItem('currentUser',JSON.stringify(userName))
     setIsLoggedIn(true)

    }

    const logoutHandler =()=>{
        setIsLoggedIn(false)
        setUserName('')
        localStorage.clear()

    }

    console.log(localStorage.getItem('token'),'===getIte')

    return   <>
     <div style={{margin:'0 auto',width:'50%'}}>
            <h1 style={{textAlign:'center'}}>{userName}</h1>
         <form >
                <label class="sr-only">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    onChange={handleInputChange}
                    required
                    value={user}
                />
                <label class="sr-only">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className='form-control'
                    placeholder="Password"
                    onChange={handleInputChange}
                    value={userPass}
                    required
                />
                {isLoggedIn?<button onClick={logoutHandler}>log out</button>:<button onClick={submitHandler} style={{margin:'5px'}}>sign in</button>}


            </form>
           
            <Link style={{textAlign:'center'}} to={'/register'}>Don't have account</Link>
    </div>
    </>

}

export default Login;