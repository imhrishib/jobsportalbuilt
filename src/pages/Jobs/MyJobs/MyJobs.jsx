import React from 'react';
import axios from "axios";
import { useEffect , useState} from 'react';
import Cookies from 'js-cookie'
import isLoggedIn from '../../login/CheckLogin';
import CardList from '../../../components/CardList/CardList';

const loggedIn=isLoggedIn()
function MyJobs (){
    const[jobs,setjobs]=useState(null)
   
    
    useEffect(() => {
        axios.get('api/jobs/created/',{
            headers:{
                Authorization:"Bearer "+Cookies.get("access")
            }
        })
        .then(res => {return res.data}
            ).then(data=>{
                setjobs(data);                              
                
            }
            );
           
            ;
      },[]);

    
   
   
   if(loggedIn==false){
    return(
     
       <div>
           You need to <a href="/login">
               login </a> to View Your Jobs
              
          
       </div>
       

    );
   }
   else{return(

        <div>
           {jobs && <CardList jobs={jobs}/>} 
        </div>

      
   )
}
}
export default MyJobs;
