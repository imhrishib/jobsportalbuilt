import React from 'react';
import './login.css';
import axios from "axios";
import { useEffect , useState} from 'react';
// import { useCookies } from 'react-cookie';
import  { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import isLoggedIn from './CheckLogin';

function Login (){

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [formError,setformerror]=useState(null);
    async function handleSubmit(e){
        e.preventDefault();
        const credentials={
            email,password
        }
        axios.post('api/accounts/auth/jwt/create', credentials)
       .then
       (res=>{
       
            var data=res.data;
            Cookies.set('access', data.access);
            Cookies.set('refresh',data.refresh);
            console.log(data);
            axios.get('api/accounts/auth/users/me/').then(res=>{
                
                localStorage.setItem("email", res.data.email);

                
                

           })
            window.location.href = "/";
         }).
         catch(()=>{
            setformerror('Wrong Username and Password Combination');
        });



        
        
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
           
           
           <center> <button type="submit" class="btn btn-primary">Log In</button></center>
        </form>
        {formError && <div>{formError}</div>}
        {/* <button type="" class="btn btn-primary" onClick={isLoggedIn}>Check</button> */}
    </div>

    );
   }
   else{return(
      
       <Redirect to="/" />
     
   
   );
   };
}

export default Login;
