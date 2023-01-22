import React from 'react'
import Course from './CourseCard'

export default function Courses({courses, search}) {
  return (
      <div className='courses-page'>
        <ul className='list-courses'>
          {courses.filter((item) =>{
            return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search) || item.category.toLowerCase().includes(search) || item.dateStart.toLowerCase().includes(search)
          }).map(c => <Course key={c.id} course={c} />)}
        </ul>
      </div>
  )
}
