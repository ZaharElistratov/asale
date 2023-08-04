import {FC} from 'react';

import styles from './Option.module.scss'
import Icon from "@/components/ui/Icon/Icon";

const Option: FC = () => {
	return (
		<div className={styles.option}>
			<h2 className={styles.title}>Other options</h2>
			<div className={styles.body}>
				<div className={styles.left}>
					<div className={styles.price}>
						<span>15 200 ₽</span>
						<del>28 400 ₽</del>
					</div>
					<div className={styles.place}>
						<Icon id='store' width={26} height={24}/>
						<span>Other store</span>
					</div>
				</div>
				<button className={styles.button}>Go to website</button>
			</div>
		</div>
	);
};

export default Option;