import clsx from "clsx";
import { Fragment } from "react";
import BenefitItem from "../BenefitItem";

import styles from './Benefit.module.scss'

function Benefit({label, firstChild, items}) {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.label)}>{label}</div>
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
            {items.map((item, index) => (
                <BenefitItem 
                    key={index} 
                    name={item.name} 
                    desc={item.desc}    
                    boldDesc={item.boldDesc}    
                    lsDesc={item.lsDesc}    
                    silver={item.silver}    
                    gold={item.gold}   
                    diamond={item.diamond}   
                    items={item.items}
                />
            ))}
        </div>
    );
}

export default Benefit;