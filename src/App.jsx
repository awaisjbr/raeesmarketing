import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const Contact = lazy(() => import("./pages/Contact"));
// const Skills = lazy(() => import("./pages/Skills"));
// const Portfolio = lazy(() => import("./pages/Portfolio"));
// const Success = lazy(() => import("./pages/Success"));
const Loading = lazy(() => import("./components/Loading"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={""} />
          <Route path="/projects" element={""} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
