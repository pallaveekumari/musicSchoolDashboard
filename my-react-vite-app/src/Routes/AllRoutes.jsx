import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Overview from './Overview/overview'
import Course from './Course/course'
import Login from './Login/Login'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/overview" element={<Overview/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path="/login" element={<Login/>}/>
        
    </Routes>
  )
}

export default AllRoutes