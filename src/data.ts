import bannerImg from "./images/earth_.webp";
import offerBg1 from "./images/offer-1.webp";
import offerBg2 from "./images/offer-2.webp";
import offerBg3 from "./images/offer-3.webp";
import offerBg4 from "./images/offer-4.webp";

export const data = {
    menu: [
        {text: "Home", url: "#", id: "menu__home"},
        {text: "Products", url: "#", id: "menu__products"},
        {text: "", url: "#", id: "menu__cart"},
    ],
    banner: {
        title: 'Discover the vast expanses of',
        colorfulTitle: 'space',
        description: 'Where the possibilities are',
        colorfulDescription: 'endless!',
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
            description: "Go on a space adventure",
            url: "#",
            bgUrl: offerBg2,
            buttonLabel: "Learn more",
            id: "offer__2",
        },
        {
            title: "For those who dream of stars ",
            description: "Our offer: make your dream come true",
            url: "#",
            bgUrl: offerBg3,
            buttonLabel: "Learn more",
            id: "offer__3",
        },
        {
            title: "Fulfill your fantastic dreams",
            description: "Space has never been so close",
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
        collapseDescription: 'Content that can be collapsed/expanded',
        url: '#',
        buttonLabel: 'Read more',
        collapseButtonLabel: 'Collapse',
    }
}