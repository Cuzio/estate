import React from "react";
import Hero from "../components/Hero";
import Divider from "../components/Divider";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Bell from "../components/Bell";

const Home = () => {
  return (
    <div>
      <Hero />
      <Divider />
      <Services />
      <Bell />
      <Footer />
    </div>
  );
};

export default Home;
