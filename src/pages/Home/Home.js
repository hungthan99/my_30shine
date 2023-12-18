import clsx from 'clsx';

import images from '~/assets/images';
import EmployeeList from '~/components/employees/EmployeeList';
import EndowList from '~/components/endows/EndowList';
import Schedule from '~/components/forms/Schedule';
import ServiceList from '~/components/services/ServiceList';
import StoreList from '~/components/stores/StoreList';
import styles from './Home.module.scss';
import constants from '~/constants';
import SpaceList from '~/components/spaces/SpaceList/SpaceList';
import CommitList from '~/components/commits/CommitList';
import ProvinceList from '~/components/provinces/ProvinceList';

const { services, employees, stores, endows, spaces, commits, provinces } = constants;

function Home() {
    return (
        <div className={clsx(styles.wrapper)}>
            <img className={clsx(styles.banner)} src={images.banner} alt="Banner" />
            <Schedule />
            <ServiceList items={services[0].items} label={services[0].label} />
            <div className={clsx(styles['mt-24'])}></div>
            <ServiceList items={services[1].items} label={services[1].label} />
            <div className={clsx(styles['mt-24'])}></div>
            <EmployeeList
                items={employees[0].items}
                label={employees[0].label}
                description={employees[0].description}
            />
            <div className={clsx(styles['mt-24'])}></div>
            <EmployeeList
                items={employees[1].items}
                label={employees[1].label}
                description={employees[1].description}
            />
            <div className={clsx(styles['mt-48'])}></div>
            <StoreList
                label={stores[0].label}
                description={stores[0].description}
                banner={stores[0].banner}
                alternative={stores[0].alternative}
                items={stores[0].items}
            />
            <EndowList label={endows[0].label} description={endows[0].description} items={endows[0].items} />
            <div className={clsx(styles['mt-48'])}></div>
            <EndowList label={endows[1].label} description={endows[1].description} items={endows[1].items} />
            <div className={clsx(styles['mt-24'])}></div>
            <SpaceList
                label={spaces[0].label}
                description={spaces[0].description}
                banner={spaces[0].banner}
                alternative={spaces[0].alternative}
                descBanner={spaces[0].descBanner}
                items={spaces[0].items}
            />
            <div className={clsx(styles['mt-24'])}></div>
            <CommitList
                label={commits[0].label}
                description={commits[0].description}
                banner={commits[0].banner}
                alternative={commits[0].alternative}
                titleBanner={commits[0].titleBanner}
                descBanner={commits[0].descBanner}
                to={commits[0].to}
                items={commits[0].items}
            />
            <div className={clsx(styles['mt-24'])}></div>
            <ProvinceList
                label={provinces[0].label}
                description={provinces[0].description}
                items={provinces[0].items}
            />
            <div className={clsx(styles['mb-48'])}></div>
        </div>
    );
}

export default Home;
