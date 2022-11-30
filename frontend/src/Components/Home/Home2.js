import React from 'react';
import Header from '../Structure/Header';
// import EditBreweryForm from '../Brewery/EditBreweryForm';
import BreweryCollection from '../Brewery/BreweryCollection';

export default function Home2() {

    const API_BASE = 'http://localhost:8081';

    const [cardCollection, setCardCollection] = React.useState([]);
    const [currentCardData, setCurrentCardData] = React.useState({
        breweryId: null,
        breweryName: '',
        onwerId: '',
        breweryImg: '',
        description: '',
        isActive: true,
        address: '',
        city: '',
        state: '',
        zip: ''
    });

    function refreshCollection() {
        fetch(API_BASE + "/brewery/all")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setCardCollection(data);
        });
    }

    function loadCard(cardId) {
        const url = API_BASE + (cardId === null ? '/random' : '/' + cardId);
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (cardId === null) {
                data.caption = '';
            }
            setCurrentCardData(data);
        }) 
    }


    function saveCard(cardData) {
        if (cardData.breweryId !== undefined ) {
            // update
            fetch(API_BASE + '/' + cardData.breweryId, {
                method: 'PUT',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cardData)
            })
                .then((response) => {
                    if( response.ok ) {
                        alert('Card saved!');
                        refreshCollection();
                    }
                })
                .catch((err) => {
                    console.error(err);
                    alert('Could not save card!');
                });
        } else {
            // save
            fetch(API_BASE, {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cardData)
            })
                .then((response) => {
                    if( response.ok ) {
                        alert('Card saved!');
                        loadCard(null);
                        refreshCollection();
                    }
                })
                .catch((err) => {
                    console.error(err);
                    alert('Could not save brewery information!');
                });
        }
    }

    function editCard(breweryId) {
        loadCard(breweryId);
    }

    function deleteCard(breweryId) {
        fetch(API_BASE + '/' + breweryId, {
            method: 'DELETE',
        })
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            alert('Card deleted!');
            refreshCollection();
        })
        .catch((err) => {
            console.error(err);
            alert('Could not delete card!');
        });
    }
    
    return (
        <>
            <Header />
            {/* <EditBreweryForm cardData={currentCardData} getNewCard={getNewCard} saveCard={saveCard} /> */}
            <BreweryCollection cards={cardCollection} editCard={editCard} deleteCard={deleteCard} />
        </>
    );
}




// const api = axios.create({
//     baseUrl: 'http://localhost:8081'
// })

// export default class Home2 extends Component {

// state = {
//    breweries: []  
// }

// constructor() {
//     super();
//     api.get('/').then(res => {
//       console.log(res.data)  
//       this.setState({breweries: res.data})
//     })
// }

//     render() {
//         return (
//             <div>
//                 {this.state.breweries.map(brewery => 
//                  <breweryCard />
//                     )}
//             </div>
//         );
//     }

// }