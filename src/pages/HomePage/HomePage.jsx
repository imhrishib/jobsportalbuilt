import React from 'react';
import './HomePage.css';
import axios from "axios";
import { useEffect , useState} from 'react';




function HomePage (){   
    return(
       <div className="jumbotron home-container">
          <a href="/jobs"> <div className="Linkto jumbotron">
                   Search for Jobs
           </div></a>
           <a href="/services"><div className="Linkto jumbotron">
               Search for Services
               
           </div></a>
           
       </div>
       

    );
   
   
}

export default HomePage;
