import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Shared/baseUrl";
import axios from "axios";
import { GlobalContext } from "../../context/globalContext";
import { useEffect } from "react";

const Home = ()=>{
//brewery list 
    const [breweries,setBreweries]=useState([])
//token from the context
    const {token} = useContext(GlobalContext)
 //passing token as header inside the getbrewery/all request and got the data
    const  getBreweries = async()=>{
        const res = await axios.get(baseUrl+'/brewery/all',{
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		}
)
        // res.then((data)=> {console.log(data);}).catch((err)=>{console.log(err,'===err');})
//set the data to brewery list
        setBreweries(res.data)
    }

    // console.log(breweries,'=res====');

    return <>
    <h2>I am from home component </h2>
    <button onClick={getBreweries}>getBreweries</button>
    <div><h4>Select Brewery</h4>
        {breweries?.length!==0?<select>{breweries.map((item)=><option key={item.breweryId}>{item.breweryName}</option>)}</select>:""}
    </div>
    </>
}

export default Home;
