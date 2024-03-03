import bannerImg from "./images/earth_.png";
import offerBg1 from "./images/offer-1.png";
import offerBg2 from "./images/offer-2.png";
import offerBg3 from "./images/offer-3.png";
import offerBg4 from "./images/offer-4.png";

import React from 'react';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Offers from "./components/Offers";
import InfoArticle from "./components/InfoArticle";
import Footer from "./components/Footer";

const data = {
  menu: [
    {text: "Home", url: "#", id: "menu__home"},
    {text: "Products", url: "#", id: "menu__products"},
    {text: "", url: "#", id: "menu__cart"},
  ],
  banner: {
      title: 'Discover the vast expanses of',
      colorfulTitle: 'space',
      description: 'Where the possibilities are endless!',
      imgUrl: bannerImg,
      buttonLabel: 'Learn more',
  },
  offers: [
    {
        title: "Move the borders of reality!",
        description: "Go on a space adventure - it's possible with us!",
        url: "#",
        bgUrl: offerBg1,
        buttonLabel: "Learn more", // TODO: add an animation
        id: "offer__1",
    },
      {
          title: "Space is not just stars and planets",
          description: "Go on a space adventure - it's possible with us!",
          url: "#",
          bgUrl: offerBg2,
          buttonLabel: "Learn more",
          id: "offer__2",
      },
      {
          title: "For those who dream of stars ",
          description: "Go on a space adventure - it's possible with us!",
          url: "#",
          bgUrl: offerBg3,
          buttonLabel: "Learn more",
          id: "offer__3",
      },
      {
          title: "Fulfill your fantastic dreams",
          description: "Go on a space adventure - it's possible with us!",
          url: "#",
          bgUrl: offerBg4,
          buttonLabel: "Learn more",
          id: "offer__4",
      },
  ],
    infoArticle: {
      title: 'Embark on a space journey',
        description: 'Travelling into space is one of the most exciting and unforgettable adventures\n' +
            'that can change your life forever. And if you have ever dreamed of exploring\n' +
            'stars, planets and galaxies, then our company is ready to help you realize this\n' +
            'dream. We offer a unique experience that will allow you to go on a space journey\n' +
            'and see all the secrets of the universe. We guarantee that every moment in space\n' +
            'will be filled with incredible impressions, excitement and new discoveries. Our\n' +
            'team of professionals takes care of your safety and comfort so that you can fully\n' +
            'enjoy your adventure in space. We offer various options for space excursions.',
        url: '#',
        buttonLabel: 'Read more',
    }
}

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
