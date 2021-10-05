import React from 'react';
import isLoggedIn from '../../pages/login/CheckLogin';


const LogInLogOut = ()=>{
    var loggedIn=isLoggedIn();
    
    if(loggedIn==0){
        return (
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="/Login">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/signup">
                  Sign up
                </a>
              </li>
            </ul>
        )

    }else{
        return (
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="/Logout">
                  Log Out
                </a>
              </li>
             
            </ul>
        )

    }
    
}

export default LogInLogOut;