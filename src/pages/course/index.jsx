import React from 'react'
import Course from './CourseCard'

export default function Courses({courses}) {
  return (
      <div className='courses-page'>
        <ul className='list-courses'>
          {courses.map(c => <Course key={c.id} course={c} />)}
        </ul>
      </div>
  )
}
