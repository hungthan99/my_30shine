import clsx from "clsx";
import { Fragment } from "react";
import BenefitItem from "../BenefitItem";

import styles from './Benefit.module.scss'

function Benefit({firstChild}) {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.label)}>Ưu đãi - tiết kiệm</div>
            {
                firstChild && 
                <Fragment>
                    <div className={clsx(styles.category)}>
                        <h4 className={clsx(styles.type)}>Silver</h4>
                        <p className={clsx(styles.accumulate)}>Giá mua</p>
                        <p className={clsx(styles.price)}>99k</p>
                    </div>
                    <div className={clsx(styles.category)}>
                        <h4 className={clsx(styles.type)}>Gold</h4>
                        <p className={clsx(styles.accumulate)}>Tích luỹ 6 tháng</p>
                        <p className={clsx(styles.price)}>2500K</p>
                    </div>
                    <div className={clsx(styles.category)}>
                        <h4 className={clsx(styles.type)}>Diamond</h4>
                        <p className={clsx(styles.accumulate)}>Tích luỹ 6 tháng</p>
                        <p className={clsx(styles.price)}>7000K</p>
                    </div>
                </Fragment>
            }
            <BenefitItem />
        </div>
    );
}

export default Benefit;