import React from "react";

const BeerCard = ({ imgUrl, title, description, id, abv, type }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "300px",
        height: "auto",
        opacity: "0.7",
        backgroundColor: "#aaa",
        color: "#fff",
        boxShadow: "2px 4px 5px #888",
      }}
    >
      <img style={{ width: "100%", padding: "5px" }} src={imgUrl} alt={id} />
      <h4>{title}</h4>
      <h5>{type}</h5>
      <span>abv: {abv}</span>
      <p style={{ textAlign: "center" }}>{description}</p>
      <button>See More</button>
    </div>
  );
};

export default BeerCard;
