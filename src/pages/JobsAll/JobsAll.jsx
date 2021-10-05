import React from 'react';
import './JobsAll.css';
import axios from "axios";
import { useEffect , useState} from 'react';

function JobsAll (){
    const [JobList, setJobList] = useState(null);    
   
   
    axios.get('api/jobs/all/')
        .then(res => {return res.data}
            ).then(data=>{
                setJobList(data);
        
                
            }
            );
    
    return(
    <div className="all-jobs">
        {JobList && JobList.map((JobList)=>(
       <div className="job-container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{JobList.title}</h5>
                    <p className="card-text">{JobList.category}</p>
                    <p className="card-text">{JobList.location}</p>
                   
                </div>
            </div>
     </div>
        )
        )}
        
    </div>

    );
}

export default JobsAll;