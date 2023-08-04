import {FC} from 'react';

import data from "@/components/Catalog/Filter/data";

import Price from "@/components/ui/Price/Price";
import Category from "@/components/Catalog/Filter/Category/Category";

import styles from './Filter.module.scss'

const Filter: FC = () => {
	return (
		<div className={styles.filter}>
			<Price className={styles.price}/>
			{data.map((item, index) =>
				<Category title={item.title} parameters={item.parameters} key={index}/>
			)}
		</div>
	);
};

export default Filter;