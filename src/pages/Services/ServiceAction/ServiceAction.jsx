import react from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import isLoggedIn from '../../login/CheckLogin';
// import UpdateService from 'UpdateService/UpdateService'
// import ConsumeService from 'ConsumeService/ConsumeService'


const loggedIn=isLoggedIn();
const ServiceAction=({service,setservice})=>{
    
    if(loggedIn==0){
        return(
            <center>
            <div>
                Please log in to apply.
            </div>
            </center>
        )
    }
    else{
    if(localStorage.getItem("email")==service?.recruiter.email){
            // return(<UpdateService service={service} setservice={setservice}/>)

        }
        else{
            // return(<ConsumeService service={service}/>)

        }
    }

    


}
export default ServiceAction;
