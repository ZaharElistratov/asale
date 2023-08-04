import {FC} from 'react';

import styles from './Buy.module.scss'
import Icon from "@/components/ui/Icon/Icon";

const Buy: FC = () => {
	return (
		<div className={styles.buy}>
			<h1 className={styles.title}>Mustang Style Heather</h1>
			<p className={styles.text}>Coat</p>
			<div className={styles.place}>
				<Icon id='store' width={26} height={24}/>
				<span>MAAG</span>
			</div>
			<div className={styles.price}>
				<span>15 200 ₽</span>
				<del>28 400 ₽</del>
			</div>
			<form className={styles.sizes}>
				<label className={styles.size}>
					<input type="radio" name='size'/>
					<span>S</span>
				</label>
				<label className={styles.size}>
					<input type="radio" name='size'/>
					<span>M</span>
				</label>
				<label className={styles.size}>
					<input type="radio" name='size'/>
					<span>L</span>
				</label>
				<label className={styles.size}>
					<input type="radio" name='size'/>
					<span>XL</span>
				</label>
			</form>
			<div className={styles.buttons}>
				<button className={styles.button}>
					Go to website
				</button>
				<button className={styles.button}>
					<Icon id='favorite' width={24} height={24}/>
				</button>
			</div>
		</div>
	);
};

export default Buy;