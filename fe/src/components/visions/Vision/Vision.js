import clsx from "clsx";
import Label from "../../Label";
import VisionItem from "../VisionItem";

import styles from './Vision.module.scss'

function Vision({label, desc1, desc2, items}) {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <Label label={label} />
            <p className={clsx(styles['desc'])}>{desc1}</p>
            <p className={clsx(styles['desc'])}>{desc2}</p>
            <div className={clsx(styles['list-items'])}>
                {items.map((item, index) => (
                    <VisionItem key={index} image={item.image} title={item.title} items={item.items}/>
                ))}
            </div>
        </div>
     );
}

export default Vision;