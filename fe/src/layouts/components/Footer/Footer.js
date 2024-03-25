import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Button from '../Button';
import styles from './Footer.module.scss';
import config from '~/config';

function Footer() {
    return (
        <>
            <div className={clsx(styles.contact)}>
                <div className={clsx(styles.list)}>
                    <Link to={config.routes.about} className={clsx(styles.item, styles.medium)}>
                        Về chúng tôi
                    </Link>
                    <p className={clsx(styles.item, styles.medium)}>30Shine Shop</p>
                    <Link to={config.routes.systemSalon} className={clsx(styles.item, styles.medium)}>
                        Tìm 30Shine gần nhất
                    </Link>
                    <Link className={clsx(styles.item, styles.medium)}>Học cắt tóc</Link>
                    <Link to={config.routes.policy} className={clsx(styles.item, styles.medium)}>
                        Chính sách bảo mật
                    </Link>
                </div>
                <div className={clsx(styles.list)}>
                    <p className={clsx(styles.item, styles.disable)}>Giờ phục vụ: 8h30 - 20h30 (Thứ 2-Chủ nhật)</p>
                    <p className={clsx(styles.item)}>
                        Hotline (1000đ/phút): <span className={clsx(styles.bold)}>1900.27.27.03</span>
                    </p>
                    <p className={clsx(styles.item)}>
                        Liên hệ học nghề tóc: <span className={clsx(styles.bold)}>0967.86.3030</span>
                    </p>
                    <Link to={config.routes.contactAdvertising} className={clsx(styles.item, styles.bold)}>
                        Liên hệ quảng cáo
                    </Link>
                </div>
                <div className={clsx(styles.list)}>
                    <p className={clsx(styles.item, styles.disable)}>Tải ứng dụng 30Shine</p>
                    <div className={clsx(styles.btns)}>
                        <Button
                            image="https://30shine.com/static/media/footer_googleplay.d7565d43.svg"
                            title="Google Play"
                            medium
                        />
                        <Button
                            image="https://30shine.com/static/media/footer_apple.e1893799.svg"
                            title="App Store"
                            medium
                        />
                    </div>
                    <p className={clsx(styles.item, styles.disable)}>Tham gia cộng đồng 2,5 triệu thành viên</p>
                    <div className={clsx(styles.btns)}>
                        <Button
                            image="https://30shine.com/static/media/footer_tiktok.0e2ca318.svg"
                            title="600k follow"
                            large
                        />
                        <Button
                            image="https://30shine.com/static/media/footer_youtube.2cc3c779.svg"
                            title="1300k follow"
                            large
                        />
                        <Button
                            image="https://30shine.com/static/media/footer_facebook.6e62b291.svg"
                            title="200k follow"
                            large
                        />
                    </div>
                    <div className={styles.logos}>
                        <div className={clsx(styles.item)}>
                            <img
                                src="https://30shine.com/static/media/footer_congthuongicon.dd646d39.svg"
                                alt="Cong thuong"
                            />
                        </div>
                        <div className={clsx(styles.item)}>
                            <img src="https://30shine.com/static/media/footer_dmca.e3096c90.svg" alt="DMCA" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.license)}>
                <p className={clsx(styles.address)}>
                    © 2015 Công Ty Cổ Phần TMDV 30Shine / Địa chỉ: 82 Trần Đại Nghĩa, P. Đồng Tâm, Q. Hai Bà Trưng,
                </p>
                <p className={clsx(styles.address)}>
                    {' '}
                    HN/ GPĐKKD số 010.7467.693 do Sở KHĐT TP.HN cấp ngày 08/06/2016.
                </p>
            </div>
        </>
    );
}

export default Footer;
