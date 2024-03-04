import React from 'react';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Offers from "./components/Offers";
import InfoArticle from "./components/InfoArticle";
import Footer from "./components/Footer";
import {data} from "./data";

function App() {
  const { menu, banner, offers, infoArticle } = data;

  return (
    <>
        <Header items={menu}/>
        <Banner {...banner}/>
        <Offers items={offers}/>
        <InfoArticle {...infoArticle}/>
        <Footer/>
    </>
  );
}

export default App;
