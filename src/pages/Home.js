import React from "react";
import Slider from "../components/Slider";
//import Breadcrumbs from "../components/Breadcrumbs";
import CategoriesSection from "../components/CategoriesSection";
import Popularproducts from "../products/Popularproducts";
import Productbanner from "../products/Productbanner";
import Services from "./Services";
//import Deal from "./Deal";
import Blog from "./Blog";

const Home = () => {
  return (
    <>
      <Slider />
      <CategoriesSection />
      <Popularproducts />
      <Productbanner />

      <Services />
      <Blog />
      {/*<Deal />
      <Testimonial />
      */}
    </>
  );
};

export default Home;
