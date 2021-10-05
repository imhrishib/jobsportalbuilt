import react from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import isLoggedIn from '../../login/CheckLogin';
import Application from '../../Application/Application';
import UpdateJob from '../UpdateJob/UpdateJob';

const loggedIn=isLoggedIn();
const JobAction=({job,setJob})=>{
    useEffect(()=>{
    //     function action(){
    //     if(loggedIn!=0){
    //         if(localStorage.getItem("email")==job.recruiter.email){
                

    //         }
    //         else{
               

    //         }

    //     }
    // }
    // action();


    },[]
    )

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
    if(localStorage.getItem("email")==job?.recruiter.email){
            return(<UpdateJob job={job} setJob={setJob}/>)

        }
        else{
            return(<Application job={job}/>)

        }
    }

    


}
export default JobAction;