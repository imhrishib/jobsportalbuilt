import React from 'react';
import './LogOut.css';
import axios from "axios";

// import { useCookies } from 'react-cookie';
import  { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'


function LogOut (){

    Cookies.remove('access');
    Cookies.remove('refresh');
    localStorage.clear();

    
    
   
   

    return(
       
        <div className="jumbotron logout-cotainer">
        <h1>You have been successfully logged out.</h1>
       
     
    </div>

    );
  
   
}

export default LogOut;
