import { Route ,Routes } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Courses from './pages/course/index';
import SingleCourse from './pages/course/SingleCourse';
import Navbar from './layout/Navbar';
import Home from './pages/home/index'
import { courses } from './data/courses'
import { users } from './data/users';


function App() {
  const [search , setSearch] = useState('')
  return (
    <div className='App'>
      <Navbar setSearch={setSearch}/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/course'>
          <Route index element={<Courses search={search.toLowerCase()} courses={courses} />} />
          <Route path=':id' element={<SingleCourse />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App;
