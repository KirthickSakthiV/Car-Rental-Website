import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Producted } from "../pages/Producted";
const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path = '/' element={<Login/>}/>
      <Route path = '/login' element={<Login/>}/>

      <Route path = '/register' element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
