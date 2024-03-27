import clsx from 'clsx';

import styles from './DefaultLayout.module.scss';
import images from '~/assets/images';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MessageButton from '../components/MessageButton';

function DefaultLayout({ children }) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className={clsx(styles.wrapper)}>
            <Header />
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.content)}>{children}</div>
            </div>
            <div className={clsx(styles.controls)}>
                <button className={clsx(styles.btn)} onClick={scrollToTop}>
                    <img src={images.arrowUp} alt="Arrow up" />
                </button>
                <button className={clsx(styles.btn)}>
                    <img src={images.phone} alt="Phone" />
                </button>
                <MessageButton className={clsx(styles.btn)}/>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
