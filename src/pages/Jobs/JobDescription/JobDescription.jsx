import React from 'react';
import './JobDescription.css';
import axios from "axios";
import { useEffect , useState} from 'react';
import Cookies from 'js-cookie'
import isLoggedIn from '../../login/CheckLogin';
import {useParams} from 'react-router-dom';
import JobAction from '../JobAction/JobAction';

const loggedIn=isLoggedIn()


function JobDescription (){
    console.log('rendering')
    const[Job,setJob]=useState(null)
    const {id} = useParams()
    
    useEffect(() => {
        const fetch_data = async ()=>{
            try{
                const job = await axios.get(`api/jobs/${id}/retrieve/`)
                setJob(job.data)
            }
            catch(err){
                console.log(err);
            }
        }
        fetch_data()
      },[]);


      useEffect(()=>{
          console.log(Job);
      },[Job])
    
   
   
 return(
  <div>
    
   <div className="job-one-container jumbotron">
       <h2>{Job?.title}</h2>
       <small>{Job?.category}</small>
       <small>Location:
           {Job?.location}</small>
       
       
       <p>{Job?.description}</p>
       <p>Salary:{Job?.salary}</p>
       
      
       
    </div>
    <JobAction job={Job} setJob={setJob}/>
    
 </div>  

    

      
   )

}
export default JobDescription;
