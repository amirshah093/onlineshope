const INITIAL_STATE ={
    currentuser: null
}

const userReducer = ( state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'SET_CURRENT_USER': 
        return{
            ...state,
            currentuser: action.paylod
        }
        default:
            return state;
    }
}

export default userReducer;