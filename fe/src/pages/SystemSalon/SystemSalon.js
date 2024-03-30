import clsx from "clsx";
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './SystemSalon.module.scss'
import images from '~/assets/images';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function SystemSalon() {
    const [cities, setCities] = useState([])
    const [city, setCity] = useState('Tỉnh/Thành phố')
    const [districts, setDistricts] = useState([])
    const [district, setDistrict] = useState('Quận huyện')
    const [showCitiesForm, setShowCitiesForm] = useState(false)
    const [showDistrictsForm, setShowDistrictsForm] = useState(false)
    useEffect(() => {
        fetch('http://localhost:3001/cities/')
            .then(res => res.json())
            .then(data => setCities(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:3001/districts/')
            .then(res => res.json())
            .then(data => setDistricts(data))
    }, [])
    useEffect(() => {
        setShowCitiesForm(false)
    }, [city])
    useEffect(() => {
        setShowDistrictsForm(false)
    }, [district])
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.banner)}>
                <img className={clsx(styles['banner-image'])} src={images.bannerSystemSalon} alt="System salon banner"/>
                <h1 className={clsx(styles['banner-title'])}>HỆ THỐNG SALON CỦA 30SHINE</h1>
                <p className={clsx(styles['banner-description'])}>Tính đến hiện tại, chuỗi salon tóc nam 30Shine có 119 salon tại những vị trí đắc địa nhất Hà Nội, TP. Hồ Chí Minh và các tỉnh lân cận. Hãy tìm đến salon 30Shine gần anh nhất để tận hưởng trải nghiệm cắt tóc nam đỉnh cao!</p>
            </div>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.content)}>
                    <div className={clsx(styles['content-body'])}>
                        <div className={clsx(styles['content-group-btns'])}>
                            <div className={styles['location-btn']}>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p className={styles['location-title']}>TÌM SALON GẦN ANH</p>
                            </div>
                            <button className={styles['location-select']} onClick={() => setShowCitiesForm(true)}>
                                <HeadlessTippy
                                    interactive
                                    placement="bottom-start"
                                    visible={showCitiesForm}
                                    offset={[-16, 20]}
                                    onClickOutside={() => setShowCitiesForm(false)}
                                    render={(attrs) => (
                                        <div className={clsx(styles['cities-form'])} tabIndex="-1" {...attrs}>
                                            {cities.map((city, index) => (
                                                <div 
                                                    key={index} 
                                                    className={clsx(styles['city-item'])}
                                                    onClick={() => setCity(city.name + ' (' + city.number + ')')}
                                                >
                                                    {city.name} ({city.number})
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                >
                                    <div className={styles['location-select-btn']}>
                                        {city}
                                        <FontAwesomeIcon className={styles['location-select-icon']} icon={faChevronDown} />
                                    </div>
                                </HeadlessTippy>
                            </button>
                            <button className={styles['location-select']} onClick={() => setShowDistrictsForm(true)}>
                                <HeadlessTippy
                                    interactive
                                    placement="bottom-start"
                                    visible={showDistrictsForm}
                                    offset={[-16, 20]}
                                    onClickOutside={() => setShowDistrictsForm(false)}
                                    render={(attrs) => (
                                        <div className={clsx(styles['cities-form'])} tabIndex="-1" {...attrs}>
                                            {districts.map((district, index) => (
                                                <div 
                                                    key={index} 
                                                    className={clsx(styles['city-item'])}
                                                    onClick={() => setDistrict(district.name + ' (' + district.number + ')')}
                                                >
                                                    {district.name} ({district.number})
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                >
                                    <div className={styles['location-select-btn']}>
                                        {district}
                                        <FontAwesomeIcon className={styles['location-select-icon']} icon={faChevronDown} />
                                    </div>
                                </HeadlessTippy>
                            </button>
                        </div>
                        <div className={clsx(styles['content-map'])}>
                            <ul className={clsx(styles['list-province'])}>
                                {cities.map((city, index) => (
                                    <li key={index} className={clsx(styles['province-item'])}>{city.name} ({city.number})</li>
                                ))}
                            </ul>
                            <img className={clsx(styles['display-map'])} src={images.map} alt="Map VN" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SystemSalon
