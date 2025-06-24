import React from "react";
import Slider from "../Components/Slider/Slider";
import AppSection from "../Components/AppSection/AppsSection";
import Announcements from "../Components/Announcements/Announcements";
import useTitle from "../hooks/useTitle/useTitle";

const Home = () => {
  useTitle("AppGallery - Find Your Important Apps");
  return (
    <div className="my-10">
      <Slider></Slider>
      <AppSection></AppSection>
      <Announcements></Announcements>
    </div>
  );
};

export default Home;
