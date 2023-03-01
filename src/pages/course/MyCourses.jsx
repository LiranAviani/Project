import React, { useContext } from 'react'
import DataContext from '../../context/DataContext'
import Card from '../course/CourseCard'

export default function MyCourses() {
    const {coursesA} = useContext(DataContext)
    const {user} = useContext(DataContext)
  return (
    <div className="courses-page">
      <ul className="list-courses">
        {user.myCourse.length > 0 ? (coursesA.filter(c => user.myCourse.includes(c.id))
          .map((c) => (
            <Card key={c.id} course={c} />
          ))) : (<div>you dont have courses yet go and find course and register</div>)}
        
      </ul>
    </div>
  )
}
