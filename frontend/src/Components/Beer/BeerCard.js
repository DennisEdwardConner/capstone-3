import React from "react";


const BeerCard = ({imgUrl,title,description,id,abv,type})=>{
return <div style={{width:'350px',height:'auto'}}><img style={{width:'340px'}} src={imgUrl} alt={id}/>
<h4>{title}</h4>
<h5>{type}</h5>
<span>abv: {abv}</span>
<p>{description}</p>
<button>See More</button>
</div>
}

export default BeerCard;