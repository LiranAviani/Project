import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Course() {
  const location = useLocation()
  const {course} = location.state
  
  return (
    <div>
      <h3>Course name: {course.name}</h3>
      <p>Category: {course.category}</p>
      <p>Sub-Category: {course.subCategory}</p>
      <p>About: {course.about}</p>
      <p>Start date: {course.dateStart}</p>
      <p>End date: {course.dateEnd}</p>
      <p>Capacity: {course.capacity}</p>
      <p>Members: {course.members.length}</p>
      <p>Status: {course.status}</p>
    </div>
  );
}
