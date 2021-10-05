import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';



const Card = ({application})=>{
    return(
       <div className="job-container">
    
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Description {application.job.description}</h5>
                <h5 className="card-title">Location {application.job.location}</h5>
                <p className="card-text">Job Type {application.job.job_type}</p>
                <p className="card-text">Application {application.application}</p>
            </div>
        </div>
        </div>
    );
}

export default Card;