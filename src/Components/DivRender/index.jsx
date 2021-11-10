import React, { useState } from 'react';
//import classNames from 'classnames';
import styles from "./DivRender.module.scss";

function DivRender() {
    const [widthValue, setWidth] = useState(0);
    const [heightValue, setHeight] = useState(0);
    const divStyle = styles.divStyle;
    const [inlineDivStyle, setInlineDivStyle] = useState(null);

    const widthHandler = ({target: {value}}) =>{
        setWidth(value);
    }

    const heightHandler = ({target: {value}}) =>{
        setHeight(value);
    }

    const rerender = () =>{
      
        setInlineDivStyle({
            width: `${widthValue}px`,
            height: `${heightValue}px`,
        });
    }

    return (
        <div>
            <input type="text" value={widthValue} onChange={widthHandler}/>
            <input type="text" value={heightValue} onChange={heightHandler}/>
            <button onClick={rerender}>Rerender</button>
            <div style={inlineDivStyle} className={divStyle}></div>
        </div>
    )
}

export default DivRender
