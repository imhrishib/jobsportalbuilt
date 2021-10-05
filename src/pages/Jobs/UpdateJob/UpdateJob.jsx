import React from 'react';

import axios from "axios";
import { useEffect , useState} from 'react';
// import { useCookies } from 'react-cookie';
import  { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import isLoggedIn from '../../login/CheckLogin';
import { locations,jobTypes,jobCategories,currencies } from '../../../Data/Data';

const loggedIn=isLoggedIn()
function UpdateJob ({job,setJob}){

    const [state, setState] = useState(job);
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)
    
      const handleChange = async (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        });
      };
    
    const id=job.id;
   

   
 function handleSubmit(e){
       
       
        e.preventDefault();
        const {recruiter,...info}=state;
        console.log(info);  
        axios.put(`api/jobs/${id}/update/`, info,{
        headers: {
            Authorization: 'Bearer ' + Cookies.get("access")
          }
        })
       .then(res=>{return res.data})
       .then((data)=>{
        setError(false)
        setSuccess(true)
        console.log(job)
        console.log("calling setJob")
        console.log(typeof(setJob))
        setJob(job)
       })
       .catch((err)=>{
         setSuccess(false);
         setError(true);
         console.log(err)
       }
       )
    }
    
  
   
   
   if(loggedIn==false){
    return(
     
       <div>
           You need to <a href="/login">
            login </a> to Post Jobs
       </div>
       

    );
   }
   else{
    return (
        <div>
          <div className="jumbotron signup-form-container">
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  name="title"
                  class="form-control"
                  id="title"
                  aria-describedby="emailHelp"
                  placeholder="Title"
                  value={state.title}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <input
                  type="text"
                  name="description"
                  class="form-control"
                  id="description"
                  aria-describedby="emailHelp"
                  placeholder="Description"
                  value={state.description}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <label for="job-type">Job Type</label>
                <select
                  class="form-control"
                  name="job_type"
                  id="job-type"
                  value={state.job_type}
                  onChange={handleChange}
                  
                >
                  {jobTypes.map((jobType) => (
                    <option value={jobType}> {jobType}</option>
                  ))}
                </select>
              </div>
              <div class="form-group">
                <label for="job-category">Job Category</label>
                <select name='category'
                  class="form-control"
                  id="job-category"
                  value={state.category}
                  onChange={handleChange}
                >
                  {jobCategories.map((jobCategory) => (
                    <option value={jobCategory}> {jobCategory}</option>
                  ))}
                </select>
              </div>
              <div class="form-group">
                <label for="currency">Salary Currency</label>
                <select name='currency' 
                  class="form-control"
                  id="currency"
                  value={state.currency}
                  onChange={handleChange}
                >
                  {currencies.map((currencies) => (
                    <option value={currencies}> {currencies}</option>
                  ))}
                </select>
              </div>
              <div class="form-group">
                <label for="salary">Salary</label>
                <input
                  type="text"
                  class="form-control"
                  id="salary"
                  name="salary"
                  aria-describedby="emailHelp"
                  placeholder="Salary"
                  value={state.salary}
                  onChange={handleChange}
                />
              </div>
  
              <div class="form-group">
                <label for="location">Location</label>
                <select
                  class="form-control"
                  id="location"
                  name='location'
                  value={state.location}
                  onChange={handleChange}
                >
                  {locations.map((locations) => (
                    <option value={locations}> {locations}</option>
                  ))}
                </select>
              </div>
              <div class="form-group">
                <label for="equity">Equity</label>
                <select
                  class="form-control"
                  id="equity"
                  value={state.equity}
                  onChange={handleChange}
                >
                  <option value="false"> No</option>
                  <option value="true"> Yes</option>
                </select>
              </div>
  
              <center>
                {" "}
                <button type="submit" class="btn btn-primary">
                  Post Job
                </button>
              </center>
            </form>
            <div className={`error-message ${!error?'hidden':''}`}>Error in submiting application</div>
            <div className={`success-message ${!success?'hidden':''}`}>Application submitted successfully</div>
          </div>

        </div>
      );
   }
}

export default UpdateJob;
