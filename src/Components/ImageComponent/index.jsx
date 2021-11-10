import React from 'react';
import style from './ImageComponent.module.scss';

function ImageComponent(props) {
    const {image} = props;

    return (
        <div className={style.imageDivStyle}>
            <img src={image.src} alt={image.src} />
        </div>
    )
}

export default ImageComponent;
