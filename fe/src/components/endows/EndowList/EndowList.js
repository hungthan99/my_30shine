import clsx from 'clsx';
import { ArrowLeft, ArrowRight } from '~/components/arrows';
import Label from '~/components/Label';
import EndowItem from '../EndowItem';

import styles from './EndowList.module.scss';

function EndowList({ label, description, items }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Label label={label} description={description} />
            <div className={clsx(styles['list-item'])}>
                {items.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <EndowItem
                            image={item.image}
                            name={item.name}
                            priceNew={item.priceNew}
                            priceOld={item.priceOld}
                            to={item.to}
                        />
                    </div>
                ))}
            </div>
            <ArrowLeft />
            <ArrowRight />
        </div>
    );
}

export default EndowList;
