import clsx from 'clsx';

import styles from './Navigation.module.scss';
import config from '~/config';
import NavigationItem from '~/layouts/components/NavigationItem';
import { useState } from 'react';

const nav = [
    {
        id: 1,
        title: 'Trang chủ',
        to: config.routes.home,
    },
    {
        id: 2,
        title: 'Về 30Shine',
        to: config.routes.about,
    },
    {
        id: 3,
        title: '30Shine Shop',
    },
    {
        id: 4,
        title: 'Tìm 30Shine gần nhất',
        to: config.routes.systemSalon,
    },
    {
        id: 5,
        title: 'Học cắt tóc',
    },
    {
        id: 6,
        title: 'Shine Member',
        to: config.routes.shineMember,
    },
];

function Navigation() {
    const [activeTab, setActiveTab] = useState(1);
    const onTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <div className={clsx(styles.navigation)}>
            {nav.map((item) => {
                return (
                    <NavigationItem
                        key={item.id}
                        title={item.title}
                        to={item.to}
                        id={item.id}
                        activeTab={activeTab}
                        onClick={() => onTabClick(item.id)}
                    />
                );
            })}
        </div>
    );
}

export default Navigation;
