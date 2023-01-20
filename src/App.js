import { Route ,Routes } from 'react-router-dom';
import './App.css';
import Courses from './pages/course/index';
import Course from './pages/course/SingleCourse';
import Navbar from './layout/Navbar';
import Home from './pages/home/index'
import courses from './data/courses'
import users from './data/users';
import { createContext, useState } from 'react';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/course'>
          <Route index element={<Courses courses={courses} />} />
          <Route path=':id' element={<Course />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App;
