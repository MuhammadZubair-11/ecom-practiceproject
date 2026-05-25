import React from "react";
import Herosection from "./Herosection";
import Products from "./Products";
import FeaturesSection from "./FeaturesSection";
import NewsletterSection from "./NewsletterSection";

const Content = () => {
  return (
    <div className="">
      <Herosection />
      <Products/>
      <FeaturesSection/>
      <NewsletterSection/>
    </div>
  );
};

export default Content;
