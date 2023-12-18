import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './NavigationItem.module.scss';

function NavigationItem({ id, title, to, activeTab, onClick }) {
    let Component;
    if (to) {
        Component = Link;
    } else {
        Component = 'div';
    }
    return (
        <Component
            to={to}
            className={clsx(styles['navigation-item'], { [styles.active]: activeTab === id })}
            onClick={onClick}
        >
            {title}
        </Component>
    );
}

export default NavigationItem;
