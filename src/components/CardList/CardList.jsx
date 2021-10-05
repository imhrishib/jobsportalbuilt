import React from 'react';
import './card-list.css';
import {Card} from '../Card/Card';


const CardList = ({jobs})=>{
    return <div className="card-list">
        {
            jobs.map(
                (
                    Job=><Card key = {Job.id} job={Job}/>
                )
            )
        }
    </div>
}

export default CardList