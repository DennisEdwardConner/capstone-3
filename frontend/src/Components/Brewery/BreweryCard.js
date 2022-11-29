import React from 'react';

export default function BreweryCard(props) {

    return (
        <div id={props.card.breweryId} className='card'>
            <input type='hidden' value={props.card.breweryId} />
            <img className='collection-pic' src={props.card.breweryImg} alt="{props.card.breweryName}" />
            <div>{props.card.description}</div>
            <div className='collection-button-container'>
                <div className='edit-button' onClick={() => {props.edit(props.card.breweryId)}}>&#x270D; Edit</div>
                <div className='delete-button' onClick={() => {props.deleteCard(props.card.breweryId)}}>❌ Delete</div>
            </div>
        </div>
    );
}
