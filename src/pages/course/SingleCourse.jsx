import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import DataContext from "../../context/DataContext";
import style from "./style.module.css";

export default function SingleCourse() {
  const location = useLocation();
  const { course } = location.state;
  const { setCoursesA, coursesA } = useContext(DataContext);
  const dayStart = course.dateStart.getDate();
  const dayEnd = course.dateEnd.getDate();
  const monthStart =
    course.dateStart.getMonth() === 0 ? 12 : course.dateStart.getMonth();
  const monthEnd =
    course.dateEnd.getMonth() === 0 ? 12 : course.dateEnd.getMonth();
  const yearStart = course.dateStart.getFullYear();
  const yearEnd = course.dateEnd.getFullYear();
  const { user, setUser } = useContext(DataContext);
  
  function register() {
    course.members.push(user.id);
    user.myCourse.push(course.id);
    setUser(user);
    coursesA.find((c) => c.id === course.id).members.push(user.id);
    setCoursesA([...coursesA]);
  }

  function inCourse() {
    return user.myCourse.find((id) => id === course.id);
  }

  function leaveCourse() {
    const courseIndex = coursesA
      .find((c) => c.id === course.id)
      .members.findIndex((id) => id === user.id);
    coursesA.find((c) => c.id === course.id).members.splice(courseIndex, 1);
    course.members.splice(courseIndex, 1);
    setCoursesA([...coursesA]);
    const userIndex = user.myCourse.findIndex((id) => id === course.id);
    user.myCourse.splice(userIndex, 1);
  }

  return (
    <div className="courses-page">
      <div className={style.box}>
        <div className={style.glass}></div>
        <div className={style.content}>
          <h3>{course.name}</h3>
          <p>Category: {course.category}</p>
          <p>Sub-Category: {course.subCategory}</p>
          <p>About: {course.about}</p>
          <p>Start date: {dayStart + "/" + monthStart + "/" + yearStart}</p>
          <p>End date: {dayEnd + "/" + monthEnd + "/" + yearEnd}</p>
          <p>Capacity: {course.capacity}</p>
          <p>Members: {course.members.length}</p>
          <p>Status: {course.status}</p>
          <div className={style.container}>
            {inCourse() ? (
              <button onClick={leaveCourse}>
                <span>Leave</span>
              </button>
            ) : (
              <button onClick={register}>
                <span>register</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
