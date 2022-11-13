import * as actionTypes from './actionTypes';
import { baseUrl } from '../Shared/baseUrl';

export const addToken = (token) => ({
    type: actionTypes.ADD_TOKEN,
    payload: token
});

export const addUser = (user) => ({
    type: actionTypes.ADD_USER,
    payload: user
})

export const deleteUser = () => ({
    type: actionTypes.DELETE_USER
})


/* Comment function? */
export const addComment = (comment) => ({
    type: actionTypes.ADD_COMMENTS,
    payload: comment
});

export const postComment = (beerId, rating, author, comment)=> (dispatch)=> {

    const newComment = {
        dishId: beerId,
        rating: rating,
        author: author,
        comment: comment,
    }
    newComment.date = new Date().toISOString();

    return fetch( baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {

        if (response.ok) {
                return response;
        }
        else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response;
                throw error;
        }
    },
        //SERVER FAILURE 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        }
    )
    .then( response => response.json() )
    .then( response => dispatch(addComment(response)) )
    .catch(error => {
        console.log('Post Comments', error.message); 
        alert('Comment could not be posted\nError'+ error.message);
    });

}

/* Beers  functions*/
// thunk: function returns an func
export const fetchBeers = () => (dispatch) => {
    dispatch(beersLoading(true));

    return fetch(baseUrl + 'beers')
        .then(response => {
            if (response.ok) 
            {
                return response;
            }
            else
            {
                var error = new Error('Error ' + response.status + ': '+ response.statusText )
                error.response = response;
                throw error;
            }
        },
         //SERVER FAILURE 
         error => {
            var errmess = new Error( error.message );
            throw errmess;
         })
        .then(response => response.json())
        .then(beers => dispatch(addBeers(beers)))
        .catch(error => dispatch(beersFailed(error.message) ) );
}

export const beersLoading = () => ({
    type: actionTypes.BEERS_LOADING
});

export const beersFailed = (errmess) => ({
    type: actionTypes.BEERS_FAILED,
    payload: errmess
});

export const addBeers = (beers) => ({
    type: actionTypes.ADD_BEERS,
    payload: beers
});

/** Comment functions */
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        },
        //server fail
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        }) 
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: actionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: actionTypes.ADD_COMMENTS,
    payload: comments
});



/* brewery functions (just in case) */
export const fetchBreweries = () => (dispatch) => {

    dispatch( breweriesLoading() );

    return fetch( baseUrl + 'breweries')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        },
        //server failure 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then( breweries => dispatch( addBreweries(breweries) ) ) 
        .catch(error => dispatch(breweriesFailed(error.message)));
}

export const breweriesLoading = () => ({
    type: actionTypes.BREWERIES_LOADING
});

export const breweriesFailed = (errmess) => ({
    type: actionTypes.BREWERIES_FAILED,
    payload: errmess
});

export const addBreweries = (breweries) => ({
    type: actionTypes.ADD_BREWERIES,
    payload: breweries
});
