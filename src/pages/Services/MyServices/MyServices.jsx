import React from 'react';
import axios from "axios";
import { useEffect , useState} from 'react';
import Cookies from 'js-cookie'
import isLoggedIn from '../../login/CheckLogin';

const loggedIn=isLoggedIn()
function MyServices (){
    const [ServiceList,setServiceList]=useState(null)

    useEffect(()=>{
        const fetch_data = async()=>{
            const res = await axios.get('api/jobs/services/created/',{
                headers:{
                    "Authorization":"Bearer "+Cookies.get("access")
                }
            })
            console.log(res.data)
            setServiceList(res.data)
        }
        fetch_data()
    },[])
    
   
   
   if(loggedIn==false){
    return(
     
       <div>
           You need to <a href="/login">
               login </a> to View Your Jobs
              
          
       </div>
       

    );
   }
   else{return(
    <div className="all-jobs">
    {ServiceList && ServiceList.map((ServiceList)=>(
   <div className="job-container">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ServiceList.title}</h5>
                <p className="card-text">{ServiceList.category}</p>
                <p className="card-text">{ServiceList.location}</p>
               
            </div>
        </div>
 </div>
    )
    )}
    
</div>
      
   )
}
}
export default MyServices;
