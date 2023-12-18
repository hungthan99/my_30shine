import clsx from 'clsx';
import Label from '~/components/Label';
import ServiceItem from '~/components/services/ServiceItem';

import styles from './ServiceList.module.scss';

function ServiceList({ items, label }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Label label={label} />
            <div className={clsx(styles['list-item'])}>
                {items.map((item, index) => (
                    <ServiceItem key={index} image={item.image} title={item.title} price={item.price} to={item.to} />
                ))}
            </div>
        </div>
    );
}

export default ServiceList;
