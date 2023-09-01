import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropList from "../../components/propList/PropList";
import FeaturedProp from "../../components/featuredProp/FeaturedProp";
import Addition from "../../components/addition/Addition";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by Property Type</h1>
        <PropList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProp />
        <h1 className="homeTitle">Stay at our top unique properties</h1>
        <span className="homeAddition">
          From castles and villas to boats and igloos, we have it all
        </span>
        <Addition />
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
