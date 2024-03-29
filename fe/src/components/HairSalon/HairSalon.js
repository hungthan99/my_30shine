import clsx from "clsx";
import Label from "../Label";

import styles from './HairSalon.module.scss'

function HairSalon({label, desc1, desc2, images}) {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <Label label={label} />
            <p className={clsx(styles['desc'])}>{desc1}</p>
            <p className={clsx(styles['desc'])}>{desc2}</p>
            <div className={clsx(styles.images)}>
                <img className={clsx(styles.image)} src={images[0]} alt={images[0]} />
                <div className={clsx(styles['image-asides'])}>
                    <img className={clsx(styles.image)} src={images[1]} alt={images[1]} />
                    <img className={clsx(styles.image)} src={images[2]} alt={images[2]} />
                </div>
            </div>
        </div>
    );
}

export default HairSalon;