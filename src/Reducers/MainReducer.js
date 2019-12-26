const initialState = {
    loggedInStatus:localStorage.getItem('userLoggedInStatus'),
    showPopup:false
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
        case 'SHOW_POPUP':
            return{...currentState,showPopup:true}
        case 'CLOSE_POPUP':
            return{...currentState,showPopup:false}
        default:
            return{...currentState}
    }
    
}

export default mainReducer;