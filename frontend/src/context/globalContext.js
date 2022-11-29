import React,{createContext, useReducer} from "react";
import {GlobalReducer} from "./globalReducer"

export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()


const initialState =
{
    id: "",
    userName:"",
    token:'',
    authority:[],
    isRegister:false,
    
}

const GlobalContextProvider =({children})=>{

    const [state, dispatch]= useReducer(GlobalReducer,initialState);

    const setUserId = payload =>{
        dispatch({type:"SET_ID",payload})
    }

    const setUserName = payload =>{
        dispatch({type:"SET_USER_NAME",payload})
    }

    const setToken = payload =>{
        dispatch({type:"SET_TOKEN",payload})
    }

    const setIsRegister = payload =>{
        dispatch({type:"SET_IS_REGISTER",payload})
    }


    const actions ={

        setUserId ,
        setUserName,
        setToken,
        setIsRegister
    }

    return (
		<GlobalContext.Provider value={state} >
			<GlobalUpdateContext.Provider value={actions}>
				{children}
			</GlobalUpdateContext.Provider>
		</GlobalContext.Provider>
	);
  
}


export default GlobalContextProvider