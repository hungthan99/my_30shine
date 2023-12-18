import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Banner from '~/components/Banner';
import Label from '~/components/Label';
import CommitItem from '../CommitItem';

import styles from './CommitList.module.scss';

function CommitList({ label, description, banner, alternative, titleBanner, descBanner, items, to }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Label label={label} description={description} />
            <Banner
                banner={banner}
                alternative={alternative}
                titleBanner={titleBanner}
                descBanner={descBanner}
                to={to}
            />
            <div className={clsx(styles['list-item'])}>
                {items.map((item, index) => (
                    <CommitItem key={index} days={item.days} unit={item.unit} slogan={item.slogan} to={to} />
                ))}
                <Link to={to} className={clsx(styles.discount)}>
                    <p className={clsx(styles.days)}>Giảm</p>
                    <p className={clsx(styles.unit)}>20%</p>
                    <p className={clsx(styles.slogan)}>Riêng lần đầu uốn nhuộm</p>
                </Link>
            </div>
        </div>
    );
}

export default CommitList;
