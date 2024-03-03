import '../scss/info.scss';
import React from "react";
import Button from "./Button";

export default function InfoArticle({title, description, buttonLabel}: any) {
    return (
        <article className="info container">
            <div className="info__content">
                <h3 className="info__title">
                    {title}
                </h3>
                <p className={'info__description'}>
                    {description}
                </p>
                <Button label={buttonLabel} onClick={() => console.log('Button clicked')} className={'info__btn'}/>
            </div>
        </article>
    );
}
