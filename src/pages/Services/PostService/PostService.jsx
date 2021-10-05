import React from 'react';
import './PostService.css';
import axios from "axios";
import { useEffect , useState} from 'react';
// import { useCookies } from 'react-cookie';
import  { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import isLoggedIn from '../../login/CheckLogin';
import { locations,jobTypes,jobCategories,currencies } from '../../../Data/Data';

const loggedIn=isLoggedIn()
function PostService (){

    // const [job_type,setType]=useState('');
    // const [location,setLocation]=useState('');
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    
    const [currency,setCurrency]=useState('INR');
    
    const [cost,setCost]=useState('');
   
    const [category,setCategory]=useState('Programming');
  
    
    
    
async function handleSubmit(e){
   
        e.preventDefault();
        const info={
           category,currency,cost,title,description
        }
        console.log(info);
        axios.post('api/jobs/services/create/', info,{
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
               login </a> to Post Services
              
          
       </div>
       

    );
   }
   else{return(
      
    <div>
         <div className="jumbotron signup-form-container">
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="job-type" aria-describedby="emailHelp" placeholder="Title"
                value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
               
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" id="description" aria-describedby="emailHelp" placeholder="Description"
                value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
               
            </div>
            {/* <div class="form-group">
                <label for="exampleFormControlSelect1">Job Type</label>
                <select class="form-control" id="exampleFormControlSelect1" value={job_type} onChange={(e)=>{setJobType(e.target.value)}}>
                {jobTypes.map((jobTypes)=>(
                    <option value={jobTypes}> {jobTypes}</option>
            
                )
                )}
                
              
               
                </select>
            </div> */}
            <div class="form-group">
                <label for="exampleFormControlSelect1">Service Category</label>
                <input class="form-control" id="exampleFormControlSelect1" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
              
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Salary Currency</label>
                <select class="form-control" id="exampleFormControlSelect1" value={currency} onChange={(e)=>{setCurrency(e.target.value)}}>
                {currencies.map((currencies)=>(
                    <option value={currencies}> {currencies}</option>
            
                )
                )}
               
                </select>
            </div>
            <div class="form-group">
                <label for="title">Cost</label>
                <input type="text" class="form-control" id="job-type" aria-describedby="emailHelp" placeholder="Title"
                value={cost} onChange={(e)=>{setCost(e.target.value)}}/>
               
            </div>
            
            {/* <div class="form-group">
                <label for="exampleFormControlSelect1">Location</label>
                <select class="form-control" id="exampleFormControlSelect1" value={location} onChange={(e)=>{setLocation(e.target.value)}}>
                {locations.map((locations)=>(
                    <option value={locations}> {locations}</option>
            
                )
                )}
               
                </select>
            </div> */}
            {/* <div class="form-group">
                <label for="exampleFormControlSelect1">Equity</label>
                <select class="form-control" id="exampleFormControlSelect1" value={equity} onChange={(e)=>{setEquity(e.target.value)}}>
                
                
                 <option value='false'> No</option>
                 <option value='true'> Yes</option>
            
               
                </select>
            </div> */}
            
           <center> <button type="submit" class="btn btn-primary">Post Service</button></center>
        </form>
      
    </div>
       
    </div>
     
   
   );
   };
}

export default PostService;
