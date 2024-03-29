import clsx from 'clsx';
import { useEffect, useState } from 'react';

import styles from './About.module.scss';
import images from '~/assets/images';
import HairSalon from '~/components/HairSalon';
import Mission from '~/components/Mission';
import Vision from '~/components/visions/Vision';
import Post from '~/components/posts/Post';

function About() {
    const [hairSalons, setHairSalons] = useState([])
    const [missions, setMissions] = useState([])
    const [visions, setVisions] = useState([])
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/hair-salons/')
            .then(res => res.json())
            .then(data => setHairSalons(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:3001/missions/')
            .then(res => res.json())
            .then(data => setMissions(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:3001/visions/')
            .then(res => res.json())
            .then(data => setVisions(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:3001/posts/')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div className={clsx(styles.wrapper)}>
            <img className={clsx(styles.banner)} src={images.bannerAbout} alt="Banner" />
            {hairSalons.map((hairSalon, index) => (
                <HairSalon key={index} label={hairSalon.label} desc1={hairSalon.desc1} desc2={hairSalon.desc2} images={hairSalon.images}/>
            ))}
            {missions.map((mission, index) => (
                <Mission key={index} label={mission.label} description={mission.description} />
            ))}
            {visions.map((vision, index) => (
                <Vision key={index} label={vision.label} desc1={vision.desc1} desc2={vision.desc2} items={vision.items}/>
            ))}
            {posts.map((post, index) => (
                <Post key={index} label={post.label} items={post.items}/>
            ))}
        </div>
    );
}

export default About;
