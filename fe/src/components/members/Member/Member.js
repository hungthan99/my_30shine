import clsx from "clsx";
import MemberItem from "../MemberItem";

import styles from './Member.module.scss'

function Member({title, description, items}) {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.info)}>
                <h2 className={clsx(styles.title)}>{title}</h2>
                <p className={clsx(styles.description)}>{description}</p>
                <div className={clsx(styles['list-item'])}>
                    {items.map((item, index) => (
                        <MemberItem 
                            key={index} 
                            image={item.image} 
                            title={item.title} 
                            desc1={item.desc1} 
                            desc2={item.desc2} 
                            price={item.price} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Member;