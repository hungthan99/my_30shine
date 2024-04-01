import clsx from "clsx";

import styles from './QuestionFrequently.module.scss'

function QuestionFrequently({name, answer}) {
    return (
        <div className={clsx(styles.wrapper)}>
            <p className={clsx(styles.name)}>{name}</p>
            <p className={clsx(styles.answer)}>{answer}</p>
        </div>
    );
}

export default QuestionFrequently;