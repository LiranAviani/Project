import React from 'react'
import { useLocation } from 'react-router-dom'

export default function SingleCourse() {
  const location = useLocation()
  const {course} = location.state
  const dayStart = course.dateStart.getDate()
  const dayEnd = course.dateEnd.getDate()
  const monthStart = course.dateStart.getMonth() === 0 ? 12 : course.dateStart.getMonth();
  const monthEnd = course.dateEnd.getMonth() === 0 ? 12 : course.dateEnd.getMonth();
  const yearStart = course.dateStart.getFullYear();
  const yearEnd = course.dateEnd.getFullYear();  
  return (
    <div>
      <h3>Course name: {course.name}</h3>
      <p>Category: {course.category}</p>
      <p>Sub-Category: {course.subCategory}</p>
      <p>About: {course.about}</p>
      <p>Start date: {dayStart + "/" + monthStart + "/" + yearStart}</p>
      <p>End date: {dayEnd + "/" + monthEnd + "/" + yearEnd}</p>
      <p>Capacity: {course.capacity}</p>
      <p>Members: {course.members.length}</p>
      <p>Status: {course.status}</p>
    </div>
  );
}
