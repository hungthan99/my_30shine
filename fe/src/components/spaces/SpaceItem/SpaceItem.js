import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './SpaceItem.module.scss';

function SpaceItem({ image, name, to }) {
    return (
        <Link to={to} className={clsx(styles.wrapper)}>
            <img className={clsx(styles.image)} src={image} alt={name} />
            <p className={clsx(styles.name)}>{name}</p>
        </Link>
    );
}

export default SpaceItem;
