import clsx from 'clsx';
import { useState } from 'react';
import Notify from '../Notify';

import styles from './Schedule.module.scss';

function Schedule() {
    const [showNotify, setShowNotify] = useState(false);
    const handleClick = () => {
        setShowNotify(!showNotify);
    };
    return (
        <div className={clsx(styles.wrapper)}>
            {showNotify && <Notify />}
            <h2 className={clsx(styles.title)}>ĐẶT LỊCH GIỮ CHỖ CHỈ 30 GIÂY</h2>
            <p className={clsx(styles.description)}>Cắt xong trả tiền, hủy lịch không sao</p>
            <div className={clsx(styles['form-schedule'])}>
                <input className={clsx(styles['phone-input'])} type="tel" placeholder="Nhập SĐT để đặt lịch" />
                <button className={clsx(styles['btn-schedule'])} onClick={() => setShowNotify(handleClick)}>
                    ĐẶT LỊCH NGAY
                </button>
            </div>
        </div>
    );
}

export default Schedule;
