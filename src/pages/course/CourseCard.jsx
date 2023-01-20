import React from 'react'
import { Navigate, useNavigate, Link } from 'react-router-dom'

export default function Courses({course = {}}) {
    const { id,name,category,about,dateStart,capacity,status} = course
    const nav = useNavigate()   
  return (
    <Link to={{pathname:`/course/${id}`}} state={{course:course}} >
      <li className="course-card">
        <h3>Course name: {name}</h3>
        <p>Category: {category}</p>
        <p>About: {about}</p>
        <p>Start date: {dateStart}</p>
        <p>Capacity: {capacity}</p>
        <p>Status: {status}</p>
      </li>
    </Link>
  );
}
