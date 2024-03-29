import clsx from "clsx";
import Label from "~/components/Label";
import PostItem from "../PostItem";

import styles from './Post.module.scss'

function Post({label, items}) {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <Label label={label} />
            <div className={clsx(styles['list-items'])}>
                {items.map((item, index) => (
                    <div key={index} className={clsx(styles.item)}>
                        <PostItem label={item.label} image={item.image} slogan={item.slogan} />
                        <div className={clsx(styles.fix)}></div>
                    </div>
                ))}
            </div>
            <div className={clsx(styles['mb-ne-16'])}></div>
        </div>
    );
}

export default Post;