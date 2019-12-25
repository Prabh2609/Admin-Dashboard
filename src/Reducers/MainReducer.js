const initialState = {
    loggedInStatus:localStorage.getItem('userLoggedInStatus')
}

const mainReducer = (currentState=initialState, action) => {
    switch(action.type)
    {
        case 'USER_LOGIN':
            localStorage.setItem('userLoggedInStatus',true)
            return{...currentState,loggedInStatus:true}
        case 'USER_LOGOUT':
            localStorage.setItem('userLoggedInStatus',false)
            return{...currentState,loggedInStatus:false}
        default:
            return{...currentState}
    }
    
}

export default mainReducer;