import clsx from "clsx";

import styles from './SystemSalon.module.scss'
import images from '~/assets/images';

function SystemSalon() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.banner)}>
                <img className={clsx(styles['banner-image'])} src={images.bannerSystemSalon} alt="System salon banner"/>
                <h1 className={clsx(styles['banner-title'])}>HỆ THỐNG SALON CỦA 30SHINE</h1>
                <p className={clsx(styles['banner-description'])}>Tính đến hiện tại, chuỗi salon tóc nam 30Shine có 119 salon tại những vị trí đắc địa nhất Hà Nội, TP. Hồ Chí Minh và các tỉnh lân cận. Hãy tìm đến salon 30Shine gần anh nhất để tận hưởng trải nghiệm cắt tóc nam đỉnh cao!</p>
            </div>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.content)}>
                
                </div>
            </div>
        </div>
    );
}

export default SystemSalon
