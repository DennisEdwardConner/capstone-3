import React, { useState, useContext } from "react";
import { Switch, Route, Router, Redirect, Link } from "react-router-dom";
import { baseUrl } from "../../Shared/baseUrl";
import axios from "axios";
import { GlobalContext } from "../../context/globalContext";
import { useEffect } from "react";
import BeerCard from "../Beer/BeerCard";
import Login from "../Login/Login";
import Register from "../Register/Register";


const Card= ({img,title,id,description})=>{
    return <div style={{width:'400px',display:'flex',flexDirection:'column'}}>
        <img style={{width:"400px",height:"300px"}} src={img} alt={id}/>
        <h5 >{title}</h5>
         <p >{description}</p>
    </div>
}

const Home = () => {
  //brewery list
  const [breweries, setBreweries] = useState([]);
  const [brewery, setBrewery] = useState({});
  const [beers, setBeers] = useState([]);
  //token from the context
  const { token } = useContext(GlobalContext);
  //passing token as header inside the getbrewery/all request and got the data
  const getBreweries = async () => {
    // const res = await axios.get(baseUrl+'/brewery/all',{
    // 	headers: {
    // 		'x-access-token':localStorage.getItem('token'),
    // 	},
    // }
    // )
    const res = await axios.get(baseUrl + "/brewery/all", {
      headers: { "x-access-token": localStorage.getItem("token") },
    });
    // res.then((data)=> {console.log(data);}).catch((err)=>{console.log(err,'===err');})
    //set the data to brewery list
    setBreweries(res?.data);
    console.log(res, "=res====");
    // console.log(res.data,'=res====');
  };

  const breweryListShow = async (breweryId) => {
    const res = await axios.get(baseUrl + "/beers/brewery/" + breweryId, {
      headers: { "x-access-token": localStorage.getItem("token") },
    });
    console.log("res========", res?.data);
    setBeers([...res?.data]);
  };

  return (
    <>
      <div style={{ display: "flex", flexGrow: "1" }}>
        <div
          style={{
            margin: "10px 40px",
            color: "#332B00",
            fontweight: "600",
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
            justifyContent: "center",
          }}
        >
          <h2 className="titleText">OnTapp</h2>
          <h5 style={{ color: "#aaa", fontSize: "24px" }}>
            Your favorite brewery or beer is just a tap away
          </h5>
        </div>
        <div style={{ width: "320 px" }}>
          <Switch>
            <Route path={"/"} exact>
              <Redirect to="login" />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </div>
      <div
        style={{
          margin: "20px",
        }}
      >
        <button style={{ margin: "10px" }} onClick={getBreweries}>
          getBreweries
        </button>
        <div>
          {breweries?.length !== 0 ? (
            <select>
              {breweries.map((item) => {
                return (
                  <option
                    onClick={() => {
                      setBrewery(item);
                      breweryListShow(+item.breweryId);
                    }}
                    key={item.breweryId}
                  >
                    {item.breweryName}
                  </option>
                );
              })}
            </select>
          ) : (
            ""
          )}
        </div>
        <div style={{ display: "flex" }}>
          <div>
            {breweries?.length !== 0 ? (
              <Card
                img={brewery?.breweryImg}
                title={brewery?.breweryName}
                description={brewery?.description}
                id={brewery?.breweryId}
                address={brewery?.address}
                state={brewery?.state}
                city={brewery?.city}
                zip={brewery?.zip}
              />
            ) : (
              ""
            )}
          </div>
          <div
            style={{
              margin: "auto",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "20px",
              gap: "10px",
            }}
          >
            {beers?.length !== 0
              ? beers?.map((item) => (
                  <BeerCard
                    abv={item.abv}
                    type={item.beerType}
                    key={item.beerId}
                    imgUrl={item.beerImg}
                    id={item.beerId}
                    description={item.description}
                    title={item.beerName}
                  />
                ))
              : ""}
          </div>
        </div>{" "}
      </div>
    </>
    );
  );
};

export default Home;
