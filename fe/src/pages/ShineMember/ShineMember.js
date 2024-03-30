import clsx from "clsx";

import styles from './ShineMember.module.scss'
import images from '~/assets/images';

function ShineMember() {
    return (
        <div className={clsx(styles.wrapper)}>
            <img className={clsx(styles.banner)} src={images.bannerShineMember} alt="Banner" />
        </div>
    );
}

export default ShineMember;
