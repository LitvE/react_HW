import React from 'react';
import styles from './CentralElemComp.module.scss';
import ImageComponent from '../ImageComponent';
import TextComponent from '../TextComponent';

function CentralElemComp(props) {
    const {isFirst, images, texts} = props;

    if(isFirst){
        return(
            <div className={styles.DivStyle}>
                <ImageComponent image={images[0]}/>
                <TextComponent text={texts[0]}/>
            </div>
        )
    } else {
        return(
            <div className={styles.DivStyle}>
                <TextComponent text={texts[1]}/>
                <ImageComponent image={images[1]}/>
            </div>
        )
    }

    // return (
    //     <div>
    //         <div>
    //             <img src={image.src} alt={image.src} />
    //         </div>
    //         <div>
    //             <h3></h3>
    //             <h2></h2>
    //             <h4></h4>
    //         </div>
    //     </div>
    // )

}

export default CentralElemComp
