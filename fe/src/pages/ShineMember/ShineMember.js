import clsx from "clsx";

import styles from './ShineMember.module.scss'
import images from '~/assets/images';
import { useEffect, useState } from "react";
import Member from "~/components/members/Member";
import Benefit from "~/components/benefits/Benefit";

function ShineMember() {
    const [members, setMembers] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/members/')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    return (
        <div className={clsx(styles.wrapper)}>
            <img className={clsx(styles.banner)} src={images.bannerShineMember} alt="Banner" />
            {members.map((member, index) => (
                <Member key={index} title={member.title} description={member.description} items={member.items} />
            ))}
            <h1 className={clsx(styles.benefit)}>QUYỀN LỢI MEMBERSHIP</h1>
            <Benefit />
        </div>
    );
}

export default ShineMember;
