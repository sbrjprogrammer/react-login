import React, { useState,useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {useHistory,Link} from 'react-router-dom'
import "./login.css"
 


function Login(){

    const [state ,setState] = useState({
        email :"",
        password :""
    })
    const{email,password}=state;


const handlefBSignIn=()=>{}
const handleGooogleSignIn=()=>{}
const handleSubmit=()=>{}
const handleChange=()=>{}


    return(

        <div id="logreg-forms">
        
        <form action="" className="form-signin" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal" style={{textAlign:"center"}} type="button">
             signin
            </h1>

            <div className="social-login">
            <button className="btn google-btn social-btn" type="button" onClick={handleGooogleSignIn}>
                <span>
                    <i className="fab fa-google-plus-g"></i>sigin with google+
                </span>

            </button>


            <button className="btn facebook-btn social-btn" type="button" onClick={handlefBSignIn}>
                <span>
                    <i className="fab fa-facebook-f"></i> sigin with facebook
                </span>

            </button>
            </div>

            <p style={{textAlign:"center"}}>OR</p>
            <input type="email" name="Email" placeholder="EmailAddress" id="inputEmail" onChange={handleChange} className="form-control" required value={email} />
            <input type="password" name="password" placeholder="password" id="inputPassword" onChange={handleChange} className="form-control" required value={password} />
            <button className="btn btn-secondary btn-block" type="submit">   <i className="fas fa-sign-in-alt"></i> Sigin</button>
            <hr />
            <p>Dont have an acount</p>
            <Link to="/register">
            <button className="btn btn-secondary btn-block" type="button" id="btn-signup">
                <i className="fas fa-user-plus"></i>signup new Account
            </button>
            </Link>
        </form>
        </div>
    )
}

export default Login