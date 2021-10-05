import React, { useState, useEffect } from "react";
import axios from "../../api";
import CardList from "../../components/CardList/CardList";
import './jobs.css'
import MultiSelect from '../../components/Select/Select';





function Jobs() {
    let locations = [
        'Bengaluru',
        'Mumbai',
        'Pune',
        'Chennai',
        'Hyderabad'
    ];
    let jobTypes = [
        'Full Time',
        'Internship',
        'Part Time'
    ];
    let jobCategories = [
        'Programming',
        'Graphic Design',
        'Interactive Design',
        'Video Editing'
    ]
    let currencies = [
        'INR',
        'USD',
        'EUR'
    ]

  const [filters, setFilters] = useState({
    search: "",
    location: [],
    jobType: [],
    jobCategory: [],
    currency: [],
    salary: 0, // pending
  });

  const [jobs, setJobs] = useState([]);

  function handleChange(e) {
    console.log(e.target.name);
    console.log(e.target.value);
  }

  function make_query_string() {
    let query_string = "";
    if (filters.location.length != 0) {
      if (query_string == "") {
        query_string += "?";
      } else {
        query_string += "&";
      }
      query_string += "location__in=";
      query_string += filters.location.join();
    }
    if (filters.jobType.length != 0) {
      if (query_string == "") {
        query_string += "?";
      } else {
        query_string += "&";
      }
      query_string += "job_type__in=";
      query_string += filters.jobType.join();
    }
    if (filters.jobCategory.length != 0) {
      if (query_string == "") {
        query_string += "?";
      } else {
        query_string += "&";
      }
      query_string += "category__in=";
      query_string += filters.jobCategory.join();
    }
    if (filters.currency.length != 0) {
      if (query_string == "") {
        query_string += "?";
      } else {
        query_string += "&";
      }
      query_string += "currency__in=";
      query_string += filters.currency.join();
    }
    if (filters.search != "") {
      if (query_string == "") {
        query_string += "?";
      } else {
        query_string += "&";
      }
      query_string += "search=";
      query_string += filters.search;
    }
    return query_string;
  }

  useEffect(() => {
      console.log(filters)
    const fetch_jobs = async () => {
      let query_string = make_query_string();
      let jobs = await axios.get(`/jobs/all/${query_string}`);
      console.log(jobs);
      setJobs(jobs.data);
    };
    fetch_jobs();
  }, [filters]);

  return (
    <>
      <div className="selectWrapper">
          <MultiSelect name="location" data={locations} value={filters.location} filters={filters} setFilters={setFilters} />
          <MultiSelect name="jobType" data={jobTypes} value={filters.jobType} filters={filters} setFilters={setFilters} />
          <MultiSelect name="jobCategory" data={jobCategories} value={filters.jobCategory} filters={filters} setFilters={setFilters} />
          <MultiSelect name="currency" data={currencies} value={filters.currency} filters={filters} setFilters={setFilters} />
      </div>
      <CardList jobs={jobs} />
    </>
  );
}

export default Jobs;
