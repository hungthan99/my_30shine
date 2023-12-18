import clsx from 'clsx';
import { ArrowLeft, ArrowRight } from '~/components/arrows';
import Banner from '~/components/Banner';
import Label from '~/components/Label';
import StoreItem from '../StoreItem';

import styles from './StoreList.module.scss';

function StoreList({ label, description, banner, alternative, items }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Label label={label} description={description} />
            <Banner banner={banner} alternative={alternative} />
            <div className={clsx(styles['list-item'])}>
                {items.map((item, index) => (
                    <div className={clsx(styles.item)} key={index}>
                        <StoreItem image={item.image} name={item.name} price={item.price} />
                    </div>
                ))}
                <ArrowLeft />
                <ArrowRight />
            </div>
        </div>
    );
}

export default StoreList;
