<<<<<<< HEAD
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import {Token} from './token';
// import {User} from './user';
// import thunk from 'redux-thunk';
// // import { Beers } from './beers';
// import { Comments } from './comments';
// import { Breweries } from './breweries';
=======
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Token} from './token';
import {User} from './user';
import thunk from 'redux-thunk';
import BeerDetail from '../Components/Beer/BeerDetail';
import Comments from '../Components/Comments';
//import { Breweries } from '../Components/Breweries';
>>>>>>> 1021b14220b529b75f4f25cea2135eea62792a86


// export const ConfigureStore = () => {

//     const store = createStore(         

<<<<<<< HEAD
//         combineReducers({
//             token: Token,
//             user: User,
//             beers: Beers,
//             comments: Comments,
//             breweries: Breweries,
=======
        combineReducers({
            token: Token,
            user: User,
            beerdetail: BeerDetail,
            comments: Comments,
            //brewery: Brewery,
>>>>>>> 1021b14220b529b75f4f25cea2135eea62792a86
            
//         }),
//         applyMiddleware( thunk )            
//     );

//     return store;
// }