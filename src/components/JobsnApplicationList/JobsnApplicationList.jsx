import React from 'react';
import './JobsnApplicationList.css';
import {Card} from '../Card/Card';
import { Link } from 'react-router-dom';
import { JobnAppCard } from '../JobnAppCard/JobnAppCard';


const JobnAppCardList = ({jobs})=>{
    return <div className="card-list">
        {
            jobs.map(
                (
                    Job=><JobnAppCard key = {Job.id} job={Job}/>
                )
            )
        }
    </div>
}

export default JobnAppCardList