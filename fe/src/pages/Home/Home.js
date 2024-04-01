import clsx from 'clsx';
import { Fragment, useEffect, useState } from "react";

import images from '~/assets/images';
import EmployeeList from '~/components/employees/EmployeeList';
import EndowList from '~/components/endows/EndowList';
import Schedule from '~/components/forms/Schedule';
import ServiceList from '~/components/services/ServiceList';
import StoreList from '~/components/stores/StoreList';
import styles from './Home.module.scss';
import SpaceList from '~/components/spaces/SpaceList/SpaceList';
import CommitList from '~/components/commits/CommitList';
import ProvinceList from '~/components/provinces/ProvinceList';

function Home() {
    const [services, setServices] = useState([])
    const [employees, setEmployees] = useState([])
    const [endows, setEndows] = useState([])
    const [commits, setCommits] = useState([])
    const [provinces, setProvinces] = useState([])
    const [spaces, setSpaces] = useState([])
    const [stores, setStores] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/services/')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setServices(data);
          });
      }, []);
      useEffect(() => {
        fetch('http://localhost:3001/employees/')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setEmployees(data);
          });
      }, []);
      useEffect(() => {
        fetch('http://localhost:3001/endows/')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setEndows(data);
          });
      }, []);
      useEffect(() => {
        fetch('http://localhost:3001/commits/')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setCommits(data);
          });
      }, []);
      useEffect(() => {
        fetch('http://localhost:3001/provinces/')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setProvinces(data);
          });
      }, []);
      useEffect(() => {
        fetch('http://localhost:3001/spaces/')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setSpaces(data);
          });
      }, []);
      useEffect(() => {
        fetch('http://localhost:3001/stores/')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setStores(data);
          });
      }, []);
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.gray)}>
              <img className={clsx(styles.banner)} src={images.bannerHome} alt="Banner" />
              <Schedule />
              {services.map((service, index) => (
                  <Fragment key={index}>
                      <ServiceList
                          items={service.items} 
                          label={service.label} 
                      />
                      <div className={clsx(styles['mt-24'])}></div>
                  </Fragment>
              ))}
              {employees.map((employee, index) => (
                  <Fragment key={index}>
                      <EmployeeList 
                          items={employee.items} 
                          label={employee.label} 
                          description={employee.description} 
                      />
                      <div className={clsx(styles['mt-24'])}></div>
                  </Fragment>
              ))}
              <div className={clsx(styles['mt-48'])}></div>
            </div>
            <div className={clsx(styles.white)}>
              {stores.map((store, index) => (
                  <StoreList
                      key={index}
                      label={store.label}
                      description={store.description}
                      banner={store.banner}
                      alternative={store.alternative}
                      items={store.items}
                  />
              ))}
              {endows.map((endow, index) => (
                  <Fragment key={index}>
                      <EndowList
                          label={endow.label} 
                          description={endow.description} 
                          items={endow.items}
                      />
                      <div className={clsx(styles['mt-24'])}></div>
                  </Fragment>
              ))}
              <div className={clsx(styles['mt-48'])}></div>
            </div>
            <div className={clsx(styles.gray)}>
              {spaces.map((space, index) => (
                  <SpaceList
                      key={index}
                      label={space.label}
                      description={space.description}
                      banner={space.banner}
                      alternative={space.alternative}
                      descBanner={space.descBanner}
                      items={space.items}
                  />
              ))}
              <div className={clsx(styles['mt-24'])}></div>
              {commits.map((commit, index) => (
                  <CommitList
                      key={index}
                      label={commit.label}
                      description={commit.description}
                      banner={commit.banner}
                      alternative={commit.alternative}
                      titleBanner={commit.titleBanner}
                      descBanner={commit.descBanner}
                      to={commit.to}
                      items={commit.items}
                  />
              ))}
              <div className={clsx(styles['mt-24'])}></div>
              {provinces.map((province, index) => (
                  <ProvinceList
                      key={index}
                      label={province.label}
                      description={province.description}
                      items={province.items}
                  />
              ))}
              <div className={clsx(styles['mb-48'])}></div>
            </div>
        </div>
    );
}

export default Home;
