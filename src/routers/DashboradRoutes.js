import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Main from '../components/Main'
import CreateProduct from '../components/crud/CreateProduct'
import ListProduct from '../components/crud/ListProduct'

const DashboardRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/product' element={<ListProduct />}></Route>
            <Route path='/add-product' element={<CreateProduct />}></Route>
            <Route path='/main' element={<Main/>}></Route>
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    </>
  )
}

export default DashboardRoutes