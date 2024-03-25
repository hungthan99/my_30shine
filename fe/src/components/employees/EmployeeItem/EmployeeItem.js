import clsx from 'clsx';

import styles from './EmployeeItem.module.scss';

function EmployeeItem({ image, name, address }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <img className={clsx(styles.image)} src={image} alt={name} />
            <p className={clsx(styles.name)}>{name}</p>
            <p className={clsx(styles.address)}>{address}</p>
        </div>
    );
}

export default EmployeeItem;
