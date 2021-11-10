import React from 'react';
import styles from './TextComponent.module.scss';

function TextComponent(props) {
    const {text} = props;

    return (
        <div className={styles.textDivStyle}>
            <h3>{text.h3}</h3>
            <h2>{text.h2}</h2>
            <h4>{text.h4}</h4>
        </div>
    )
}

export default TextComponent
