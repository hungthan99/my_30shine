import clsx from 'clsx';
import Label from '~/components/Label';
import ProvinceItem from '../ProvinceItem/ProvinceItem';

import styles from './ProvinceList.module.scss';

function ProvinceList({ label, description, items }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Label label={label} description={description} />
            <div className={clsx(styles['list-item'])}>
                {items.map((item, index) => (
                    <ProvinceItem
                        key={index}
                        image={item.image}
                        name={item.name}
                        quantity={item.quantity}
                        to={item.to}
                        others={item.others}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProvinceList;
