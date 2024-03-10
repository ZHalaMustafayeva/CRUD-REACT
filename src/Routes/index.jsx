import React from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../Layout'
import { Spin } from 'antd'
import Crud from '../Pages/Crud'
const Index = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Spin tip="Loading" />}>
                <Routes>
                    <Route path="crud" element={<Layout />} >
                        <Route index element={<Crud />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Index