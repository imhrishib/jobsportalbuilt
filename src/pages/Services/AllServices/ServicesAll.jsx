import React from 'react';
import './AllServices.css';
import axios from "axios";
import { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';

function ServicesAll (){
    const [ServiceList, setServiceList] = useState(null);    
   
   
    axios.get('api/jobs/services/all/')
        .then(res => {return res.data}
            ).then(data=>{
                setServiceList(data);
        
                
            }
            );
    
    return(
    <div className="all-jobs">
        {ServiceList && ServiceList.map((ServiceList)=>(
      <Link to={`/services/${ServiceList.id}`}> <div className="job-one-container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ServiceList.title}</h5>
                    <p className="card-text">{ServiceList.category}</p>
                    <p className="card-text">{ServiceList.cost}</p>
                   
                </div>
            </div>
     </div>
     </Link>
   
        )
        )}
        
        
    </div>

    );
}

export default ServicesAll;