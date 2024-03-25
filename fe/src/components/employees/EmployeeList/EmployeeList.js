import clsx from 'clsx';

import EmployeeItem from '~/components/employees/EmployeeItem';
import styles from './EmployeeList.module.scss';
import Label from '~/components/Label';
import { ArrowLeft, ArrowRight } from '~/components/arrows';

function EmployeeList({ items, label, description }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Label label={label} description={description} />
            <div className={clsx(styles['list-item'])}>
                {items.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <EmployeeItem image={item.image} name={item.name} address={item.address} />
                    </div>
                ))}
            </div>
            <ArrowLeft />
            <ArrowRight />
        </div>
    );
}

export default EmployeeList;
