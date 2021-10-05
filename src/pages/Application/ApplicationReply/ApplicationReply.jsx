import React from 'react';
import axios from "axios";
import { useEffect , useState} from 'react';
// import { useCookies } from 'react-cookie';
import  { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import isLoggedIn from '../../login/CheckLogin';

const loggedIn=isLoggedIn()
function ApplicationReply (){

    // const [job_type,setType]=useState('');
    // const [location,setLocation]=useState('');
    const [applicationStatus,setApplicationStatus]=useState('Accepted');
    const [message,setmessage]=useState('');
   
    
    
    
 function handleSubmit(e){
  
        e.preventDefault();
        const info={
           application,phone
        }
        console.log(info);
        axios.post('api/jobs/create/', info,{
        headers: {
            Authorization: 'Bearer ' + Cookies.get("access")
          }
        })
       .then(res=>{return res.data}).then(data=> console.log(data));



        
        
    }
    
  
    
   
   
   if(loggedIn==false){
    return(
     
       <div>
           You need to <a href="/login">
               login </a> to Apply
              
          
       </div>
       

    );
   }
   else{return(
      
    <div>
         <div className="jumbotron signup-form-container">
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="title">Application</label>
                <input type="text" class="form-control" id="job-type" aria-describedby="emailHelp" placeholder="Title"
                value={applicationStatus} onChange={(e)=>{setApplicationStatus(e.target.value)}}/>
               
            </div>
            <div class="form-group">
                <label for="description">Phone No.</label>
                <input type="text" class="form-control" id="description" aria-describedby="emailHelp" placeholder="Description"
                value={message} onChange={(e)=>{setmessage(e.target.value)}}/>
               
            </div>
    
            
           <center> <button type="submit" class="btn btn-primary">Respond</button></center>
        </form>
      
    </div>
       
    </div>
     
   
   );
   };
}

export default ApplicationReply;