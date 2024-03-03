import '../scss/offers.scss';

import React from "react";
import Button from "./Button";

function OffersList({items, className}: any) {
    const listItems = items.map((item: any) =>
        <div className={`${className}__column`} style={{backgroundImage: `url(${item.bgUrl})`}} key={item.id}>
            <div className={`${className}__content`}>
                <h3 className={`${className}__title`}>
                    {item.title}
                </h3>
                <p className={`${className}__description`}>
                    {item.description}
                </p>
                <Button
                    label={item.buttonLabel}
                    onClick={() => console.log('Open rout link' + item.url)}
                    className={`${className}__btn btn btn--yellow-border`}
                />
            </div>
        </div>
    );

    return (
        <div className={`${className}__columns`}>{listItems}</div>
    );
}

function Offers(props: any) {
    return (
        <section className="offers">
            <div className="container">
                <div className="offers__category-title">
                    Offers
                </div>
                {OffersList({...props, className: 'offers'})}
            </div>
        </section>
    );
}

export default Offers;