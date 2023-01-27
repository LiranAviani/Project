import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'

export default function Card({course = {}}) {
    const { id,name,category,about,dateStart,capacity,status} = course
    const day = dateStart.getDate()
    const month = dateStart.getMonth() === 0 ? 12 : dateStart.getMonth()
    const year = dateStart.getFullYear()
  return (
    <Link to={{ pathname: `/course/${id}` }} state={{ course: course }}>
      <div className={style.box}>
        <div className={style.glass}></div>
        <div className={style.content}>
          <h3>{name}</h3>
          <p>Category: {category}</p>
          <p>About: {about}</p>
          <p>Start date: {day + "/" + month + "/" + year}</p>
          <p>Capacity: {capacity}</p>
          <p>Status: {status}</p>
        </div>
      </div>
    </Link>
  );
}
