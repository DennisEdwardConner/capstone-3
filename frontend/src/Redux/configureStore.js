import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Token} from './token';
import {User} from './user';
import thunk from 'redux-thunk';
import BeerDetail from '../Components/Beer/BeerDetail';
import Comments from '../Components/Comments';
//import { Breweries } from '../Components/Breweries';


export const ConfigureStore = () => {

    const store = createStore(         

        combineReducers({
            token: Token,
            user: User,
            beerdetail: BeerDetail,
            comments: Comments,
            //brewery: Brewery,
            
        }),
        applyMiddleware( thunk )            
    );

    return store;
}