import BreweryObjects from "./BreweryObjects";


export default function SqlWriter(breweryDB){

    let defaultImagePath = "public/defaultBreweryImg.PNG"
    let count = 5000;
    breweryDB.array.forEach(brewery => {
    console.log(`INSERT into breweries (brewery_name, owner_id, brewery_img, isActive, address, city, state, zip) VALUES ( ${brewery.name}, ${count}, ${defaultImagePath}, "true", ${brewery.address}, ${brewery.city}, ${brewery.province}, ${brewery.postalCode})`) 
    count++;   
    });
}