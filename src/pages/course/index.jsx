import React from "react";
import Card from "./CourseCard";

const getDate = (date) => {
  let sp = date.split("-");
  return new Date(sp[0], sp[1], sp[2]);
};
export default function Courses({ courses, search, date }) {
  return (
    <div className="courses-page">
      <ul className="list-courses">
        {courses
          .filter((item) => (date ? item.dateStart >= getDate(date) : true))
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search) ||
                  item.category.toLowerCase().includes(search);
          })
          .map((c) => (
            <Card key={c.id} course={c} />
          ))}
      </ul>
    </div>
  );
}
