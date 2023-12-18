import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './ProvinceItem.module.scss';

function ProvinceItem({ image, name, quantity, to, others }) {
    let Component;
    if (to) {
        Component = Link;
    } else {
        Component = 'div';
    }
    return (
        <Component to={to} className={clsx(styles.wrapper)}>
            <img className={clsx(styles.image)} src={image} alt={name} />
            {others && (
                <div className={clsx(styles.others)}>
                    <div className={clsx(styles.item)}></div>
                    <div className={clsx(styles.item)}></div>
                    <div className={clsx(styles.item)}></div>
                </div>
            )}
            <p className={clsx(styles.name)}>{name}</p>
            <p className={clsx(styles.quantity)}>{quantity}</p>
        </Component>
    );
}

export default ProvinceItem;
