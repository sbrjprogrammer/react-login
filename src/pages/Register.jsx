import React, { useState,useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate,Link} from 'react-router-dom'
import { registerInitiate } from "../Redux/action";
import "./register.css"


function Register(){

    const [state ,setState] = useState({
        displayName :" ",
        email :"",
        password :"",
        passwordConfirm :""
    })


    const {currentUser} = useSelector((state)=>state.user);

    const dispatch = useDispatch()
    const{email,password,displayName,passwordConfirm}=state;

    const history = useNavigate();
    useEffect(()=>{
        if(currentUser){
            history.push("/");
        }
    },[currentUser,history]);




const handleSubmit=(e)=>{
    // e.preventDefault();
    if(password !== passwordConfirm){
        return;
    }
    dispatch(registerInitiate(email,password,displayName))
    setState({email:"",displayName:"",password:"",passwordConfirm:""})
}
const handleChange=(e)=>{
    let {name, value} = e.target;
    setState({...state, [name]: value});
}


    return(

        <div id="register-form">
        
        <form action="" className="form-signUp" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal" style={{textAlign:"center"}} type="button">
                signUp
            </h1>

           

             <input type="text" name="displayname" placeholder="Fullname" id="displayName" onChange={handleChange} className="form-control" required />{/*value={displayName} /> */}
            <input type="email" name="Email" placeholder="EmailAddress" id="UserEmail" onChange={handleChange} className="form-control" required  />
            <input type="password" name="password" placeholder="password" id="inputPassword" onChange={handleChange} className="form-control" required  />
            <input type="password" name="password-confirm" placeholder="repeat-password" id="passwordConfirm" onChange={handleChange} className="form-control" required  />
            <button className="btn btn-primary btn-block" type="submit">
               <i className="fas fa-user-plus"></i>  Signup</button>
            <Link to="/login">
                <i className="fas fa-angle-left"></i> Back
            </Link>
           <br />
        </form>
        </div>
    )
}

export default Register