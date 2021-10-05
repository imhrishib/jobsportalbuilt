import React from 'react';
import axios from "axios";
import { useEffect , useState} from 'react';
// import { useCookies } from 'react-cookie';
import  { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import isLoggedIn from '../login/CheckLogin';

const loggedIn=isLoggedIn()
function Application ({job}){

    
    
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)
    const [phone,setphone]=useState("");
    const [application,setapplication]=useState("");
    
 function handleSubmit(e){
        const id=job.id;
        e.preventDefault();
        const info={
           application,phone,id
        }
        console.log(info);
        axios.post(`api/jobs/${id}/apply/`, info,{
        headers: {
            Authorization: 'Bearer ' + Cookies.get("access")
          }
        })
       .then(res=>{return res.data}).then(data=> {
           console.log(data)
           setError(false)
           setSuccess(true);
           console.log(success)
        })
        .catch((err)=>{
            console.log(err)
            setSuccess(false)
            setError(true)

        })
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
      
    
         <div className="jumbotron signup-form-container">
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" id="phone" aria-describedby="emailHelp" placeholder="Enter Phone no."
                value={phone} onChange={(e)=>{setphone(e.target.value)}}/>
               
            </div>
            <div class="form-group">
                <label for="application">Application</label>
                <input type="text" class="form-control" id="application" placeholder="Application"  value={application} onChange={(e)=>{setapplication(e.target.value)}}/>
            </div>
           
           
           <center> <button type="submit" class="btn btn-primary">Submit Application</button></center>
        </form>

        <div className={`error-message ${!error?'hidden':''}`}>Error in submiting application</div>
        <div className={`success-message ${!success?'hidden':''}`}>Application submitted successfully</div>
    </div>
      
   );
   };
}

export default Application;