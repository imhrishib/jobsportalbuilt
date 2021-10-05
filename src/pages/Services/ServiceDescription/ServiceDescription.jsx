import React from 'react';
import axios from "axios";
import { useEffect , useState} from 'react';
import Cookies from 'js-cookie'
import isLoggedIn from '../../login/CheckLogin';
import {useParams} from 'react-router-dom';
// import ServiceAction from '../ServiceAction/ServiceAction';
const loggedIn=isLoggedIn()


function ServiceDescription (){
    const[service,setservice]=useState(null)
    const {id} = useParams()
    
    useEffect(() => {
        const fetch_data = async ()=>{
            try{
                const service = await axios.get(`api/jobs/services/${id}/retrieve/`)
                setservice(service.data)
            }
            catch(err){
                console.log(err);
            }
        }
        fetch_data()
      },[]);


      useEffect(()=>{
          console.log(service);
      },[service])
    
   
   
 return(
  <div>
    
   <div className="job-one-container jumbotron">
       <h2>{service?.title}</h2>
       <small>{service?.category}</small>
       
       
       <p>{service?.description}</p>
       <p>Cost:{service?.cost}</p>
       
      
       
    </div>
    {/* <ServiceAction service={service} setservice={setservice}/> */}
 </div>  

    

      
   )

}
export default ServiceDescription;
