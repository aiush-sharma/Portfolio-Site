import React from "react";
import Navbar from "./shared/Navbar.jsx";
import Home from "./pages/Home.jsx";
import PhotoSection from "./pages/Gallery.jsx";
import AboutMe from "./pages/Aboutme.jsx";
import Achievements from "./pages/Achivements.jsx";
import Contact from "./pages/Contact.jsx";
import { Routes, Route } from "react-router-dom";
import { fromJSON } from "postcss";
import { inject } from "@vercel/analytics";

if (!import.meta.env.DEV) {
  inject();
}
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/photo" element={<PhotoSection />}></Route>
        <Route path="/about" element={<AboutMe />}></Route>
        <Route path="/achivements" element={<Achievements />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="*"
          element={
            <h1 className=" flex h-screen items-center justify-center text-2xl text-red-600 font-bold">
              OOPS! 404 page not found
            </h1>
          }
        />
      </Routes>
    </>
  );
};

export default App;
