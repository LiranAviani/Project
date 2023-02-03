import React, { useContext } from 'react'
import DataContext from '../../context/DataContext'
import Card from '../course/CourseCard'

export default function MyCourses() {
    const {coursesA} = useContext(DataContext)
    const {user} = useContext(DataContext)
  return (
    <div className="courses-page">
      <ul className="list-courses">
        {coursesA.filter(c => c.id === user.id)
          .map((c) => (
            <Card key={c.id} course={c} />
          ))}
      </ul>
    </div>
  )
}
