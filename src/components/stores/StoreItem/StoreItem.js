import clsx from 'clsx';

import styles from './StoreItem.module.scss';

function StoreItem({ image, name, price }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <img className={clsx(styles.image)} src={image} alt={name} />
            <p className={clsx(styles.name)}>{name}</p>
            <p className={clsx(styles.price)}>{price}</p>
        </div>
    );
}

export default StoreItem;
