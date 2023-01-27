import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({course = {}}) {
    const { id,name,category,about,dateStart,capacity,status} = course
    const day = dateStart.getDate()
    const month = dateStart.getMonth() === 0 ? 12 : dateStart.getMonth()
    const year = dateStart.getFullYear()
  return (
    <Link to={{ pathname: `/course/${id}` }} state={{ course: course }}>
      <li className="course-card">
        <h3>Course name: {name}</h3>
        <p>Category: {category}</p>
        <p>About: {about}</p>
        <p>Start date: {day + "/" + month + "/" + year}</p>
        <p>Capacity: {capacity}</p>
        <p>Status: {status}</p>
      </li>
    </Link>
  );
}
