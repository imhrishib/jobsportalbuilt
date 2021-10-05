import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';


export const Card = ({job})=>{
    return(
       <div className="job-container">
    
        <div className="card">
        <Link to = {`/jobs/${job.id}`} >
            <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">{job.category}</p>
                <p className="card-text">{job.location}</p>
            </div>
        </Link>
        </div>
        </div>
    );
}