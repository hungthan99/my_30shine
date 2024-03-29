import clsx from "clsx";
import Label from "../Label";

import styles from './Mission.module.scss'

function Mission({label, description}) {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <Label label={label} description={description}/>
        </div>
     );
}

export default Mission;