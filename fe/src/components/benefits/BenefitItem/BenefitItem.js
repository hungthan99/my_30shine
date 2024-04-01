import clsx from "clsx";

import styles from './BenefitItem.module.scss'
import images from '~/assets/images';
// import { Fragment } from "react";

function BenefitItem({name, desc, boldDesc, lsDesc, silver, gold, diamond, items}) {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.info)}>
                <p className={clsx(styles.name)}><b>{name}</b></p>
                {desc && <p className={clsx(styles.desc)}>{desc} {boldDesc && <b>{boldDesc}</b>}</p>}
                <ul>
                    {lsDesc &&
                        lsDesc.map((descItem, index) => (
                            <li key={index} className={clsx(styles['item-desc'])}>{descItem}</li>
                        ))
                    }
                </ul>
            </div>
            <div className={clsx(styles.silver)}>
                {silver && <img src={images.silverCrown} alt="Crown" />}
                <b>{items[0]}</b>
            </div>
            <div className={clsx(styles.gold)}>
                {gold && <img src={images.goldCrown} alt="Crown" />}
                <b>{items[1]}</b>
            </div>
            <div className={clsx(styles.diamond)}>
                {diamond && <img src={images.diamondCrown} alt="Crown" />}
                <b>{items[2]}</b>
            </div>
        </div>
    );
}

export default BenefitItem;