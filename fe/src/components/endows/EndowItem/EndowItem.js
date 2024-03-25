import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './EndowItem.module.scss';

function EndowItem({ image, name, priceNew, priceOld, to }) {
    let Component;
    if (to) {
        Component = Link;
    } else {
        Component = 'div';
    }
    return (
        <Component to={to} className={clsx(styles.wrapper)}>
            <img className={clsx(styles.image)} src={image} alt={name} />
            <p className={clsx(styles.name)}>{name}</p>
            {priceNew && priceOld && (
                <div className={clsx(styles.price)}>
                    <p className={clsx(styles['price-new'])}>{priceNew}</p>
                    <p className={clsx(styles['price-old'])}>{priceOld}</p>
                </div>
            )}
        </Component>
    );
}

export default EndowItem;
