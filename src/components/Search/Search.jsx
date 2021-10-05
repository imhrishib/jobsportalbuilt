
import React from 'react';
import './Search.css';

export const Search = ({placeholder,handlechange})=>(
    <input className="Search" type = "search" placeholder={placeholder} onChange={handlechange}></input>
)