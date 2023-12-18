import clsx from 'clsx';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import styles from './CommitItem.module.scss';

function CommitItem({ days, unit, slogan, to }) {
    let Component;
    if (to) {
        Component = Link;
    } else {
        Component = Fragment;
    }
    return (
        <Component to={to} className={clsx(styles.wrapper)}>
            <p className={clsx(styles.days)}>{days}</p>
            <p className={clsx(styles.unit)}>{unit}</p>
            <p className={clsx(styles.slogan)}>{slogan}</p>
        </Component>
    );
}

export default CommitItem;
