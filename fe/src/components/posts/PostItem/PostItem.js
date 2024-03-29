import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import styles from './PostItem.module.scss'

function PostItem({label, image, slogan}) {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <img className={clsx(styles.image)} src={image} alt={label}/>
            <p className={clsx(styles.label)}>{label}</p>
            <img className={clsx(styles.slogan)} src={slogan} alt={label}/>
            <div className={clsx(styles.info)}>
                Xem chi tiết
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
        </div>
    );
}

export default PostItem;