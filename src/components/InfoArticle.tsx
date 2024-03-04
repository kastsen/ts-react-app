import '../scss/info.scss';
import React, {useState} from "react";
import Button from "./Button";
import {Collapse} from 'react-collapse';

export default function InfoArticle({title, description, buttonLabel, collapseDescription, collapseButtonLabel}: any) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article className="info container">
            <div className="info__content">
                <h3 className="info__title">
                    {title}
                </h3>
                <p className={'info__description'}>
                    {description}
                </p>
                <Collapse isOpened={isExpanded}>
                    <p className={'info__description'}>{collapseDescription}</p>
                </Collapse>
                <Button label={!isExpanded ? buttonLabel : collapseButtonLabel} onClick={() => setIsExpanded(!isExpanded)} className={'info__btn'}/>
            </div>
        </article>
    );
}
