import React from 'react';
import './login.css';
import axios from "axios";
import { useEffect , useState} from 'react';
// import { useCookies } from 'react-cookie';
import  { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
const isLoggedIn=()=>{
    let access=Cookies.get("access");
    let refresh=Cookies.get("refresh");
    let token=Cookies.get("access");
    if(access && refresh){
        let tokens={
            token
        }
        axios.post('api/accounts/auth/jwt/verify', tokens)
        .then
        (res=>{
         if(res.status==200){
            return true;
        }
     
              
         
        }
        
         
         ).catch((error)=>{

            var refreshToken={refresh};
            axios.post('api/accounts/auth/jwt/refresh', refreshToken).then(res=>{
                 Cookies.set('access',res.data.access);
                 axios.get('api/accounts/auth/users/me/',{
                     headers:{
                         Authorization:"Bearer "+Cookies.get("access")
                     }
                 }).then(res=>{
                
                    localStorage.setItem("email", res.data.email);
                    

                    
                    
   
               })
                
                 return true;

            }).catch((error)=>{
                return false;
            });
         }

         );
        
        
    }
    else{
        return 0;
    }
    
}

export default isLoggedIn;