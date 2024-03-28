import clsx from 'clsx';

import styles from './About.module.scss';
import images from '~/assets/images';

function About() {
    return (
        <div className={clsx(styles.wrapper)}>
            <img className={clsx(styles.banner)} src={images.bannerAbout} alt="Banner" />
        </div>
    );
}

export default About;
