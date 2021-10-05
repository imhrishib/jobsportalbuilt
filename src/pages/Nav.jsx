import React, { useEffect, useState } from "react";
import "./style.css";
import isLoggedIn from "./login/CheckLogin";
import LogInLogOut from "../components/LogInLogOut/LogInLogOut";

export default function Nav() {

  let [user, setUser] = useState(localStorage.getItem("email"));
  setInterval(()=>{
    const email = localStorage.getItem("email")
    setUser(email);
  },1000);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
       Jobs and Services
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          {/* <li class="nav-item active">
            <a class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li> */}
        
          <li class="nav-item">
            <a class="nav-link" href="/jobs">
            Jobs
            </a>
           
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="/services">
           Services
            </a>
           
          </li> */}
          <li class="nav-item">
            <a class="nav-link" href="/myjobs">
         My Jobs
            </a>
           
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="/myservices">
         My Services
            </a>
           
          </li> */}
          <li class="nav-item">
            <a class="nav-link" href="/job-applications">
         My Job Applications
            </a>
           
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="/service-requests">
         My Service Requests
            </a>
           
          </li> */}
          <li class="nav-item">
            <a class="nav-link" href="/myapplications">
        Job Requests
            </a>
           
          </li>
        </ul>
        {/* <ul class="navbar-nav ml-auto">
          <li class={`nav-item ${user ? "show" : "hidden"}`}>
            <a class="nav-link" href="/logout">
              Logout
            </a>
          </li>
        </ul> */}
      </div>
      <div>
        <a href="/post-job"><button className="btn btn-primary btns1">Post a Job</button></a>
        {/* <a href="/post-service"><button className="btn btn-primary btns1">Post a Service</button></a> */}
        <LogInLogOut />
     
      </div>
    </nav>
  );
}
