const initialState={
    showPopUp:false
}

const PopUpReducer=(currentState=initialState,action)=>{
    switch(action.type)
    {
        case 'SHOW_POPUP':return{...currentState,showPopUp:true}
        case 'CLOSE_POPUP':return{...currentState,showPopUp:false}
        default:return{...currentState}
    }
}

export default PopUpReducer