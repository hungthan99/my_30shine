import clsx from "clsx";

import styles from './VisionItem.module.scss'

function VisionItem({image, title, items}) {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.heading)}>
                <img src={image} alt={title}/>
                <h3>{title}</h3>
            </div>
            <ul className={clsx(styles['list-items'])}>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default VisionItem;