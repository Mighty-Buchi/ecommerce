import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offer/Offer";
import Scroll from "../Components/scroll/Scroll";
import NewCollections from "../Components/NewCollections/NewCollections";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";
import Scroll2 from "../Components/Scroll2/Scroll2";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Scroll />
      <Scroll2/>
      <Popular />
      <Offer />
      <NewCollections/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Shop;
