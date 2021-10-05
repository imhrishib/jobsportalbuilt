import React, { useState, useEffect, useLayoutEffect } from "react";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import Nav from "./pages/Nav";

import Job from "./pages/Jobs/Jobs"

import axios from "./api";
import JobsAll from "./pages/JobsAll/JobsAll";
import Login from  "./pages/login/Login";
import SignUp from  "./pages/signup/SignUp";
import PostJob from "./pages/Jobs/PostJob/PostJob";
import HomePage from "./pages/HomePage/HomePage";
import ServicesAll from "./pages/Services/AllServices/ServicesAll";
import LogOut from "./pages/Logout/LogOut";
import PostService from "./pages/Services/PostService/PostService";
import MyJobs from "./pages/Jobs/MyJobs/MyJobs";
import MyServices from "./pages/Services/MyServices/MyServices";
import JobDescription from './pages/Jobs/JobDescription/JobDescription'
import ServiceDescription from "./pages/Services/ServiceDescription/ServiceDescription";
import MyJobApplications from "./pages/Application/MyApplications/Jobs/MyJobRequests"
import MyServiceApplications from "./pages/Application/MyApplications/services/MyServiceRequests"
import JobApplications from "./pages/Application/JobApplications/JobApplications"
import MyJobsnApplication from "./pages/Jobs/MyJobsnApplication/MyJobsnApplication";


function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    let email = localStorage.getItem("email");
    if (email) {
      setLoggedIn(true)
    }
  }, []);

  useEffect(()=>{
    console.log("Hello "+ LoggedIn)
  },[LoggedIn])
  return (
    <>
      <Nav LoggedIn={LoggedIn}></Nav>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/login">
            <LoginPage setLoggedIn={setLoggedIn}/>
          </Route> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/logout" component={LogOut}>
            
          </Route>
          <Route exact path="/jobs">
            <Job/>
          </Route>
          <Route exact path="/post-job" component={PostJob} />
          {/* <Route exact path="/post-service" component={PostService} /> */}
          <Route exact path="/myjobs" component={MyJobs} />
          {/* <Route exact path="/myservices" component={MyServices} /> */}
          <Route exact path="/jobs/:id" component={JobDescription} />
          {/* <Route exact path="/services" component={ServicesAll} /> */}
          {/* <Route exact path="/services/:id" component={ServiceDescription} /> */}
          {/* <Route exact path="/my-job-requests" component={MyJobRequests} /> */}
          {/* <Route exact path="/my-service-requests" component={MyServiceRequest} /> */}
          {/* <Route exact path="/myservices" component={MyServices} /> */}
          <Route exact path="/job-applications" component = {MyJobApplications} /> 
          <Route exact path = "/myjobs/:id/applications" component = {JobApplications} />
          <Route exact path = "/myapplications" component = {MyJobsnApplication} />
          {/* <Route exact path="/service-requests" component = {MyServiceApplications} />  */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
