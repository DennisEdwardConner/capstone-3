export const GlobalReducer= (state,action)=>{
    switch(action.type){
        case "SET_USER_ID":
            return{
                ...state,
                id: action.payload
            }
       case "SET_TOKEN":
           return{
               ...state,
                token: action.payload
           }

        case "SET_USER_NAME":
         return{
             ...state,
              userName: action.payload
         }   

         default:
            return state   
    }
}


// {
// id:'',
// userName:action.payload
// token:"",
// authority:[],

// }