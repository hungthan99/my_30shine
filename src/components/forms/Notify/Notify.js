import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Notify.module.scss';

function Notify() {
    return (
        <div className={clsx(styles['wrapper'])}>
            <div className={clsx(styles['toast__icon'])}>
                <FontAwesomeIcon icon={faCircleExclamation} />
            </div>
            <div className={clsx(styles['toast__body'])}>
                <h3 className={clsx(styles['toast__title'])}>Lỗi</h3>
                <p className={clsx(styles['toast__msg'])}>Anh vui lòng nhập đủ 10 số điện thoại nhé!</p>
            </div>
            <div className={clsx(styles['toast__close'])}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
        </div>
    );
}

export default Notify;
