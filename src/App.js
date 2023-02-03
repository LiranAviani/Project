import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Courses from "./pages/course/index";
import SingleCourse from "./pages/course/SingleCourse";
import MyCourses from "./pages/course/MyCourses"
import Navbar from "./layout/Navbar";
import Home from "./pages/home/index";
import { courses } from "./data/courses";
import { users } from "./data/users";
import DataContext from "./context/DataContext";

function App() {
  const [coursesA, setCoursesA] = useState(courses);
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [user, setUser] = useState(users[0])
  return (
    <div className="App">
      <DataContext.Provider value={{ user, setUser, coursesA,setCoursesA}}>
        <Navbar setSearch={setSearch} setDate={setDate} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/course">
            <Route
              index
              element={
                <Courses
                  search={search.toLowerCase()}
                  date={date}
                />
              }
            />
            <Route path=":id" element={<SingleCourse />} />
          </Route>
          <Route path="/mycourses" element={<MyCourses />} />
        </Routes>
      </DataContext.Provider>
    </div>
  );
}

export default App;
