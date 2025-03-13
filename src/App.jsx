import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Property = lazy(() => import("./components/Property"));
const Marla = lazy(() => import("./components/Marla"));
// const Success = lazy(() => import("./pages/Success"));
const Loading = lazy(() => import("./components/Loading"));

const App = () => {
  const phoneNumber = "923280555595";
  const message = encodeURIComponent("Hey there! I'am intersted in your property services!");

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, "_blank");
  };
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home whatsapp={handleWhatsAppClick}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact whatsapp={handleWhatsAppClick} />} />
          <Route path="/property">
            <Route path=":name" element={<Property />} />
            <Route path=":name/:marla" element={<Marla />} />
          </Route>
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
