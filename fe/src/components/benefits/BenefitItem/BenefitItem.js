import clsx from "clsx";

import styles from './BenefitItem.module.scss'
import images from '~/assets/images';

function BenefitItem() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.info)}>
                <p className={clsx(styles.title)}>Ưu đãi giá Cắt Xả (ShineCut) giảm 20%, Combo Cắt Gội (ShineCombo) giảm 10%.</p>
                <p className={clsx(styles.description)}>Giá cắt xả giờ đây chỉ từ 56K (*)</p>
            </div>
            <div className={clsx(styles.silver)}>
                <img src={images.silverCrown} alt="Crown" />
            </div>
            <div className={clsx(styles.gold)}>
                <img src={images.goldCrown} alt="Crown" />
            </div>
            <div className={clsx(styles.diamond)}>
                <img src={images.diamondCrown} alt="Crown" />
            </div>
        </div>
    );
}

export default BenefitItem;