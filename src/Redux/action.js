import * as types from "./actiontype"
import {auth} from "../firbase"
 

const registerStart= (user)=>{
    return{
        type :types.REGISTER_START,
        payload : user
    }
}

const registerSuccess= (user)=>{
    return{
        type : types.REGISTER_SUCCESS,
        payload: user
    }
}
const registerFail= (error)=>{
    return{
        type : types.REGISTER_FAIL,
        payload: error
    }
}




export const registerInitiate = (email,password,displayName)=>{
    return function (dispatch){
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email,password).then(({user})=>{
            user.updateProfile({
                displayName
            })
            dispatch(registerSuccess(user))
        })
        .catch((error)=>dispatch(registerFail(error.message)))
       

    }
}