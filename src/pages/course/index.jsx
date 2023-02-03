import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import Card from "./CourseCard";

const getDate = (date) => {
  let sp = date.split("-");
  return new Date(sp[0], sp[1], sp[2]);
};
export default function Courses({  search, date }) {
  const {coursesA} = useContext(DataContext)
  return (
    <div className="courses-page">
      <ul className="list-courses">
        {coursesA
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
