import clsx from 'clsx';

import styles from './Arrow.module.scss';
import images from '~/assets/images';

function ArrowRight() {
    return <img className={clsx(styles.right)} src={images.arrowRight} alt="Arrow right" />;
}

export default ArrowRight;
