import clsx from "clsx";

import styles from './MemberItem.module.scss'

function MemberItem({image, title, desc1, desc2, price}) {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <img src={image} alt={title}/>
            <h4 className={clsx(styles.title)}>{title}</h4>
            <p className={clsx(styles.description)}>
                {desc1} {' '}
                {price && <b>{price + ' '}</b>}
                {desc2}
            </p>
        </div>
    );
}

export default MemberItem;