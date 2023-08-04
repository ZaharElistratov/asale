import {FC} from 'react';
import cn from "classnames";

import styles from "./Price.module.scss";

interface PriceProps {
	className?: string
}

const Price: FC<PriceProps> = ({className}) => {
	return (
		<div className={cn(styles.price, className)}>
			<h3 className={styles.title}>Price</h3>
			<div className={styles.form}>
				<input className={styles.field} type="number" placeholder='From'/>
				<input className={styles.field} type="number" placeholder='To'/>
			</div>
		</div>
	);
};

export default Price;