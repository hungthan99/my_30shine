import clsx from 'clsx';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faMinus, faBars, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

import styles from './MessageButton.module.scss';
import images from '~/assets/images';

function MessageButton({className}) {
    const [showFormMessenger, setShowFormMessenger] = useState(false);
    const [showFormMessengerOthers, setShowFormMessengerOthers] = useState(false);
    const [showFormMessengerChild, setShowFormMessengerChild] = useState(false);
    const [showFormMessengerChildTwo, setShowFormMessengerChildTwo] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [showBtnMenu, setShowBtnMenu] = useState(true);
    const [showBtnSend, setShowBtnSend] = useState(false);
    useEffect(() => {
        if (!inputValue.trim()) {
            setShowBtnMenu(true);
            setShowBtnSend(false);
        } else {
            setShowBtnMenu(false);
            setShowBtnSend(true);
        }
    }, [inputValue])
    return (
        <div className={className}>
            <HeadlessTippy
                    interactive
                    placement="top-end"
                    visible={showFormMessenger}
                    render={(attrs) => (
                        <div className={clsx(styles['form-messenger'])} tabIndex="-1" {...attrs}>
                            <div className={clsx(styles['form-heading'])}>
                                <img
                                    src={images.logoFormMessenger}
                                    alt="Logo form messenger"
                                    className={clsx(styles['logo-form-messenger'])}
                                />
                                <div className={clsx(styles.btns)}>
                                    <div>
                                        <HeadlessTippy
                                            interactive
                                            placement="bottom-end"
                                            offset={[60, 10]}
                                            visible={showFormMessengerOthers}
                                            onClickOutside={() => setShowFormMessengerOthers(false)}
                                            render={(attrs) => (
                                                <div
                                                    className={clsx(styles['form-messenger-others'])}
                                                    tabIndex="-1"
                                                    {...attrs}
                                                >
                                                    <p className={clsx(styles['messenger-others-item'])}>
                                                        Truy cập Trang Facebook
                                                    </p>
                                                    <p className={clsx(styles['messenger-others-item'])}>
                                                        Thêm Messenger vào trang web của bạn
                                                    </p>
                                                </div>
                                            )}
                                        >
                                            <div>
                                                <FontAwesomeIcon
                                                    icon={faEllipsis}
                                                    className={clsx(styles['others-btn'])}
                                                    onClick={() => {
                                                        setShowFormMessengerOthers(!showFormMessengerOthers);
                                                    }}
                                                />
                                            </div>
                                        </HeadlessTippy>
                                    </div>

                                    <FontAwesomeIcon
                                        icon={faMinus}
                                        className={clsx(styles['close-btn'])}
                                        onClick={() => setShowFormMessenger(false)}
                                    />
                                </div>
                            </div>
                            <div className={clsx(styles['form-body'])}>
                                <div className={clsx(styles['body-title'])}>
                                    <h4 className={clsx(styles['body-title-content'])}>Chat với 30Shine</h4>
                                    <img
                                        className={clsx(styles['body-title-image'])}
                                        src={images.checkFormMessenger}
                                        alt="Check form messenger"
                                    />
                                </div>
                                <p className={clsx(styles['body-description'])}>
                                    Chúc anh một ngày mới tốt lành và đẹp trai nhé ạ! Anh cần em cần hỗ trợ gì ạ?
                                </p>
                            </div>
                            <div className={clsx(styles['form-footer'])}>
                                <div>
                                    <HeadlessTippy
                                        interactive
                                        placement="top"
                                        offset={[0, -124]}
                                        visible={showFormMessengerChild}
                                        onClickOutside={() => setShowFormMessengerChild(false)}
                                        render={(attrs) => (
                                            <div
                                                className={clsx(styles['form-messenger-child'])}
                                                tabIndex="-1"
                                                {...attrs}
                                            >
                                                <h4 className={clsx(styles['messenger-child-title'])}>Đăng nhập</h4>
                                                <div className={clsx(styles['using-button'])}>
                                                    <FontAwesomeIcon icon={faFacebookMessenger} />
                                                    <p className={clsx(styles['form-child-submit-title'])}>
                                                        Sử dụng Messenger
                                                    </p>
                                                </div>
                                                <div>
                                                    <HeadlessTippy
                                                        interactive
                                                        placement="top-end"
                                                        offset={[23, -170]}
                                                        visible={showFormMessengerChildTwo}
                                                        render={(attrs) => (
                                                            <div
                                                                className={clsx(styles['form-messenger-child-two'])}
                                                                tabIndex="-1"
                                                                {...attrs}
                                                            >
                                                                <div
                                                                    className={clsx(
                                                                        styles['messenger-child-two-heading'],
                                                                    )}
                                                                >
                                                                    <img
                                                                        src={images.logoFormMessenger}
                                                                        alt="Logo form messenger"
                                                                        className={clsx(
                                                                            styles['messenger-child-two-logo'],
                                                                        )}
                                                                    />
                                                                    <div
                                                                        className={clsx(
                                                                            styles[
                                                                                'messenger-child-two-heading-content'
                                                                            ],
                                                                        )}
                                                                    >
                                                                        <div
                                                                            className={clsx(
                                                                                styles[
                                                                                    'messenger-child-two-heading-apply'
                                                                                ],
                                                                            )}
                                                                        >
                                                                            <h4
                                                                                className={clsx(
                                                                                    styles[
                                                                                        'messenger-child-two-heading-title'
                                                                                    ],
                                                                                )}
                                                                            >
                                                                                30Shine
                                                                            </h4>
                                                                            <img
                                                                                className={clsx(
                                                                                    styles[
                                                                                        'messenger-child-two-heading-image'
                                                                                    ],
                                                                                )}
                                                                                src={images.checkFormMessenger}
                                                                                alt="Check form messenger"
                                                                            />
                                                                        </div>
                                                                        <p
                                                                            className={clsx(
                                                                                styles[
                                                                                    'messenger-child-two-heading-description'
                                                                                ],
                                                                            )}
                                                                        >
                                                                            Do Messenger cung cấp
                                                                        </p>
                                                                    </div>
                                                                    <FontAwesomeIcon
                                                                        icon={faEllipsis}
                                                                        className={clsx(styles['others-btn'])}
                                                                        onClick={() => {
                                                                            setShowFormMessengerOthers(
                                                                                !showFormMessengerOthers,
                                                                            );
                                                                        }}
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={faMinus}
                                                                        className={clsx(styles['close-btn'])}
                                                                        onClick={() =>
                                                                            setShowFormMessengerChildTwo(false)
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="messenger-child-two-body">
                                                                    <p
                                                                        className={clsx(
                                                                            styles['messenger-child-two-body-time'],
                                                                        )}
                                                                    >
                                                                        18:46
                                                                    </p>
                                                                    <p
                                                                        className={clsx(
                                                                            styles['messenger-child-two-body-content'],
                                                                        )}
                                                                    >
                                                                        Cuộc trò chuyện này sẽ tiếp tục hiển thị đến 24
                                                                        giờ ngay cả sau khi đóng. Để gỡ sớm hơn, hãy
                                                                        chọn Kết thúc đoạn chat trong menu thả xuống.
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    className={clsx(
                                                                        styles['messenger-child-two-footer'],
                                                                    )}
                                                                >
                                                                    <input
                                                                        value={inputValue}
                                                                        type="text"
                                                                        placeholder="Bạn hỏi gì đi..."
                                                                        className={clsx(
                                                                            styles['messenger-child-two-footer-input'],
                                                                        )}
                                                                        onInput={(e) => setInputValue(e.target.value)}
                                                                    />
                                                                    <div
                                                                        className={clsx(
                                                                            styles['messenger-child-two-footer-menu'],
                                                                        )}
                                                                    >
                                                                        {showBtnMenu && (
                                                                            <FontAwesomeIcon icon={faBars} />
                                                                        )}
                                                                        {showBtnSend && (
                                                                            <FontAwesomeIcon icon={faPaperPlane} />
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    >
                                                        <div
                                                            className={clsx(styles['continue-button'])}
                                                            onClick={() => setShowFormMessengerChildTwo(true)}
                                                        >
                                                            Tiếp tục với vai trò khách
                                                        </div>
                                                    </HeadlessTippy>
                                                </div>
                                                <div className={clsx(styles['messenger-child-footer'])}>
                                                    Bằng cách tiếp tục với vai trò khách, bạn đồng ý với{' '}
                                                    <span className={clsx(styles.bold)}>Điều khoản</span>,{' '}
                                                    <span className={clsx(styles.bold)}>Chính sách quyền riêng tư</span>{' '}
                                                    và <span className={clsx(styles.bold)}>Chính sách cookie</span> của
                                                    Meta.
                                                </div>
                                            </div>
                                        )}
                                    >
                                        <button
                                            className={clsx(styles['form-submit'])}
                                            onClick={() => setShowFormMessengerChild(true)}
                                        >
                                            Bắt đầu chat
                                        </button>
                                    </HeadlessTippy>
                                </div>

                                <div className={clsx(styles['footer-content'])}>
                                    <FontAwesomeIcon
                                        icon={faFacebookMessenger}
                                        className={clsx(styles['icon-messenger'])}
                                    />
                                    <p className={clsx(styles['text-content'])}>Do Messenger cung cấp</p>
                                </div>
                            </div>
                        </div>
                    )}
                >
                    <button
                        className={clsx(styles.btn, styles['btn-messenger'])}
                        onClick={() => setShowFormMessenger(true)}
                    >
                        <img src={images.messenger} alt="Messenger" />
                    </button>
                </HeadlessTippy>
        </div>
    );
}

export default MessageButton;
