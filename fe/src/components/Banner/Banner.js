import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './Banner.module.scss';

function Banner({ banner, alternative, titleBanner, descBanner, to }) {
    let Component;
    if (to) {
        Component = Link;
    } else {
        Component = 'div';
    }
    return (
        <Component to={to}>
            <img className={clsx(styles.banner)} src={banner} alt={alternative} />
            <div className={clsx(styles['banner-info'])}>
                {titleBanner && <h2 className={clsx(styles['banner-title'])}>{titleBanner}</h2>}
                <p className={clsx(styles['banner-desc'])}>{descBanner}</p>
            </div>
        </Component>
    );
}

export default Banner;
