import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from "./Error404"
import Home from '../Components/HomePage/Home'
import AboutUs from '../Components/AboutPage/AboutUs'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/AboutUs' element={<AboutUs />}></Route>
                    {/* <Route path="*" element={<Error404 />} /> */}


                </Routes>
            </BrowserRouter>
        </>
    )
}
