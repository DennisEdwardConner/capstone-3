import React from 'react';
import BreweryCard from './BreweryCard';

export default function breweryCardCollection(props) {

    const cardComponents = props.cards.map(card => (
        <BreweryCard
            key={card.breweryId}
            card={card}
            editCard={props.editCard}
            deleteCard={props.deleteCard}
        />)
    );

    return (
        <>
            <h2>All Breweries</h2>
            <div id="collection">{cardComponents}</div>
        </>
    );
}