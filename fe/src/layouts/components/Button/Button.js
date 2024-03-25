import clsx from 'clsx';

import styles from './Button.module.scss';

function Button({ image, title, medium, large }) {
    return (
        <div className={clsx(styles.wrapper, { [styles.medium]: medium }, { [styles.large]: large })}>
            <img className={styles.image} src={image} alt={title} />
            <span className={clsx(styles.title)}>{title}</span>
        </div>
    );
}

export default Button;
