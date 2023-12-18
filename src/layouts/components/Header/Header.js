import clsx from 'clsx';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import config from '~/config';
import Navigation from '~/layouts/components/Navigation';
import { useState } from 'react';

function Header() {
    const [showFormLogin, setShowFormLogin] = useState(false);
    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <Link to={config.routes.home} className={clsx(styles['logo-link'])}>
                    <img className={clsx(styles['logo-img'])} src={images.logo} alt="30shine" />
                </Link>
                <Navigation />

                <HeadlessTippy
                    interactive
                    placement="bottom-start"
                    offset={[-720, 50]}
                    visible={showFormLogin}
                    render={(attrs) => (
                        <div className={clsx(styles['form-login'])} tabIndex="-1" {...attrs}>
                            <FontAwesomeIcon
                                icon={faXmark}
                                className={clsx(styles.close)}
                                onClick={() => setShowFormLogin(false)}
                            />
                            <h2 className={clsx(styles['form-title'])}>ĐĂNG NHẬP</h2>
                            <p className={clsx(styles['form-description'])}>Số điện thoại của anh là gì ạ?</p>
                            <input
                                type="tel"
                                placeholder="Ví dụ: 0912.xxx.xxx"
                                className={clsx(styles['form-input'])}
                            />
                            <button className={clsx(styles['form-submit'])}>TIẾP TỤC</button>
                        </div>
                    )}
                >
                    <button className={styles['login-btn']} onClick={() => setShowFormLogin(true)}>
                        Đăng nhập
                    </button>
                </HeadlessTippy>
            </div>
        </header>
    );
}

export default Header;
