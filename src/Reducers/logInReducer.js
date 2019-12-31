const initialState={
    loggedInStatus:localStorage.getItem("userLoggedInStatus")==="true"
}

const LoginReducer=(currentState=initialState,action)=>{
    switch(action.type)
    {
        case 'USER_LOGOUT':localStorage.setItem("userLoggedInStatus",false)
                            return{...currentState,loggedInStatus:false}
        case 'USER_LOGIN':localStorage.setItem("userLoggedInStatus",true)
                            return{...currentState,loggedInStatus:true}
        default:return{...currentState}
    }        
}

export default LoginReducer