import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Counter2 from "./Counter2"
import Staff from "./Staff"

function AppRouter() {
  return (
    <Routes>
        <Route index element={<Counter2 />} />
        <Route path='/staff' element={<Staff />}/>
    </Routes>
  )
}

export default AppRouter