import clsx from 'clsx';

import styles from './Label.module.scss';

function Label({ label, description }) {
    return (
        <div>
            <h2 className={clsx(styles.label)}>{label}</h2>
            {description && <h4 className={clsx(styles.description)}>{description}</h4>}
        </div>
    );
}

export default Label;
