import React from "react";
import Carousel from "./components/Carousel";
import Destination from "./components/Destination";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Select from "./components/Select";



function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <Destination />
       <Search />
       <Select /> 
       <Carousel />
       <Footer />
    </div>
  );
}

export default App;
