import React from 'react';
import './signup.css';
import axios from "axios";
import { useEffect , useState} from 'react';
import isLoggedIn from '../login/CheckLogin';
import { Redirect } from 'react-router';

function SignUp (){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [re_password,setPassword2]=useState('');
    async function handleSubmit(e){
        e.preventDefault();
        const credentials={
            email,password,re_password
        }
        console.log(credentials);
        axios.post('api/accounts/auth/users/', credentials)
       .then(res=>{return res.data}).then(data=> console.log(data));



        
        
    }
    var loggedIn=isLoggedIn();
    if(loggedIn==0){
   
    return(
        <div className="jumbotron signup-form-container">
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="email-field">Email address</label>
                <input type="email" class="form-control" id="email-field" aria-describedby="emailHelp" placeholder="Enter email"
                value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
               
            </div>
            <div class="form-group">
                <label for="password-field">Password</label>
                <input type="password" class="form-control" id="password-field" placeholder="Password"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div class="form-group">
                <label for="password-field-2">Confirm Password</label>
                <input type="password" class="form-control" id="password-field-2" placeholder="Password" value={re_password} onChange={(e)=>{setPassword2(e.target.value)}}/>
            </div>
           
           <center> <button type="submit" class="btn btn-primary">Sign Up</button></center>
        </form>
        {
            <div class="creation-success">
            You have successfully created an account.Please <a href="/login">log in</a> to continue.
            </div>
        }
    </div>
    );
    }
    else{
        return(
            <Redirect to="/"></Redirect>
        )

    }
        

    
}

export default SignUp;