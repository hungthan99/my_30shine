import clsx from "clsx";

import styles from './ShineMember.module.scss'
import images from '~/assets/images';
import { useEffect, useState } from "react";
import Member from "~/components/members/Member";
import Benefit from "~/components/benefits/Benefit";
import QuestionFrequently from "~/components/QuestionFrequently";

function ShineMember() {
    const [members, setMembers] = useState([])
    const [benefits, setBenefits] = useState([])
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/members/')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:3001/benefits/')
            .then(res => res.json())
            .then(data => setBenefits(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:3001/questions/')
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, [])
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles['shine-member'])}>
                <img className={clsx(styles.banner)} src={images.bannerShineMember} alt="Banner" />
                {members.map((member, index) => (
                    <Member key={index} title={member.title} description={member.description} items={member.items} />
                ))}
            </div>
            <div className={clsx(styles['membership-benefit'])}>
                <h1 className={clsx(styles.benefit)}>QUYỀN LỢI MEMBERSHIP</h1>
                {benefits.map((benefit, index) => (
                    <Benefit key={index} label={benefit.label} firstChild={benefit.firstChild} items={benefit.items}/>
                ))}
            </div>
            <div className={clsx(styles['question-frequently'])}>
                <h1 className={clsx(styles.question)}>CÁC CÂU HỎI THƯỜNG GẶP</h1>
                {questions.map((question, index) => (
                    <QuestionFrequently key={index} name={question.name} answer={question.answer}/>
                ))}
            </div>
        </div>
    );
}

export default ShineMember;
