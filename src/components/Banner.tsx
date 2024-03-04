import React from "react";
import '../scss/banner.scss';
import Button from "./Button";

export default function Banner({title, description, imgUrl, buttonLabel, colorfulTitle, colorfulDescription}: any) {

    const handleClick = () => {
        console.log('Button clicked');
    };

    return (
        <section className="banner">
            <div className="container">
                <div className="banner__content">
                    <h1 className="banner__title">{title}<span className="banner__title--colorful"> {colorfulTitle}</span>
                    </h1>
                    <p className="banner__description">
                        {description} <span className="banner__description--colorful">{colorfulDescription}</span>
                    </p>
                    <Button label={buttonLabel} onClick={handleClick} className={'btn btn--yellow-bg'}/>
                    <img src={imgUrl} className="banner__image" alt="logo" loading="lazy"/>
                </div>
            </div>
        </section>
    );
}
