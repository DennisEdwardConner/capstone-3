import React from 'react';

export default function EditBreweryForm(props) {

    const [cardData, setCardData] = React.useState({
        breweryId: null,
        breweryName: '',
        onwerId: '',
        breweryImg: '',
        description: '',
        isActive: false,
        address: '',
        city: '',
        state: '',
        zip: ''

    })

    React.useEffect(() => {
        setCardData(props.cardData);
    }, [props.cardData]);

    function handleEditChange(event) {
        const {name, value} = event.target;
        setCardData(prevCardData => ({
            ...prevCardData,
            [name]: value
        }))
    }

    return (
        <div id="card_frame">
            <div id="brewery_card">
                <h4 id="brewey_fact">{cardData.breweryName}</h4>
                <img id="brewery_pic" src={cardData.breweryImg} alt="{cardData.breweryName}" />
            </div>

                <input
                    id="name_box"
                    type="text"
                    className="breweryName"
                    value={cardData.breweryName}
                    onChange={handleEditChange}
                    placeholder="{cardData.breweryName}"
                />
             
                <input
                    id="breweryImg_box"
                    type="text"
                    name="breweryImg"
                    value={cardData.breweryImg}
                    onChange={handleEditChange}
                    placeholder="{cardData.breweryImg}"
                />
                <input
                    id="description_box"
                    type="text"
                    name="description"
                    value={cardData.description}
                    onChange={handleEditChange}
                    placeholder="{cardData.description}"
                />
                <label for="isActive">Active?:</label>
                    <select id="cars" name="cars">
                    <option value="true">True</option>
                    <option value="false">False</option>
                    </select>
                <input
                    id="address_box"
                    type="text"
                    name="address"
                    value={cardData.address}
                    onChange={handleEditChange}
                    placeholder="{cardData.address}"
                />
                <input
                    id="state_box"
                    type="text"
                    name="state"
                    value={cardData.state}
                    onChange={handleEditChange}
                    placeholder="{cardData.state}"
                />
                <input
                    id="zip_box"
                    type="text"
                    name="zip"
                    value={cardData.zip}
                    onChange={handleEditChange}
                    placeholder="{cardData.zip}"
                />

            <div id="button_holder">
                <button id="save_btn" type="button" onClick={() => {props.setCardData(cardData)}}>&#128190; Add to collection</button>
               
            </div>
        </div>
    );
}
