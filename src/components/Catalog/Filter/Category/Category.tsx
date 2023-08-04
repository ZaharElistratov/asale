import {FC} from 'react';

import styles from './Category.module.scss'
import cn from "classnames";

interface CategoryProps {
	className?: string,
	title: string,
	parameters: string[]
}

const Category: FC<CategoryProps> = ({className, title, parameters}) => {
	return (
		<div className={cn(styles.category, className)}>
			<h3 className={styles.title}>{title}</h3>
			<ul className={styles.list}>
				{parameters.map((item, index) =>
					<li className={styles.item} key={index}>
						<label className={styles.checkbox}>
							<span className={styles.text}>{item}</span>
							<input className={styles.input} type="checkbox"/>
						</label>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Category;