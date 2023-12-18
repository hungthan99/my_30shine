import clsx from 'clsx';

import styles from './Arrow.module.scss';
import images from '~/assets/images';

function ArrowLeft() {
    return <img className={clsx(styles.left)} src={images.arrowLeft} alt="Arrow left" />;
}

export default ArrowLeft;
