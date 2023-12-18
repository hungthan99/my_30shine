import clsx from 'clsx';
import Banner from '~/components/Banner';
import Label from '~/components/Label';
import SpaceItem from '../SpaceItem';

import styles from './SpaceList.module.scss';

function SpaceList({ label, description, banner, alternative, descBanner, items }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Label label={label} description={description} />
            <Banner banner={banner} descBanner={descBanner} alternative={alternative} />
            <div className={clsx(styles['mt--14'])}></div>
            <div className={clsx(styles['list-item'])}>
                {items.map((item, index) => (
                    <SpaceItem key={index} image={item.image} name={item.name} to={item.to} />
                ))}
            </div>
        </div>
    );
}

export default SpaceList;
