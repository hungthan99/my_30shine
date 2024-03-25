import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './ServiceItem.module.scss';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ServiceItem({ image, title, price, to }) {
    return (
        <Link to={to} className={clsx(styles.wrapper)}>
            <img className={clsx(styles.image)} src={image} alt={title} />
            <h4 className={clsx(styles.title)}>{title}</h4>
            <div className={clsx(styles.content)}>
                <p className={clsx(styles.price)}>{price}</p>
                <div className={clsx(styles.info)}>
                    Tìm hiểu thêm
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </Link>
    );
}

export default ServiceItem;
