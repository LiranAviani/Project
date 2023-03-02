import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import Card from "./CourseCard";
import { Form } from "react-bootstrap";

const getDate = (date) => {
  let sp = date.split("-");
  return new Date(sp[0], sp[1], sp[2]);
};
export default function Courses({  search, date , setSearch, setDate}) {
  const {coursesA} = useContext(DataContext)
  return (
  <div>
    <Form className="d-flex">
        <Form.Control
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Form.Control
          onChange={(e) => setDate(e.target.value)}
          type="date"
          name="startDate"
        />
      </Form>
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
  </div>
  );
}
