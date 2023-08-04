import {FC} from 'react';

import Table from "@/components/Information/Description/Table/Table";

import styles from './Description.module.scss'

const Description: FC = () => {
	return (
		<div className={styles.description}>
			<h2 className={styles.title}>Description</h2>
			<p className={styles.text}>
				Пальто рубашечного кроя выполнено из смесового полотна из хлопка и льна. Модель прямого силуэта. Детали: скрытая
				застежка на пуговицы, отложной воротник, накладные карманы, пояс в кулиске.
			</p>
			<Table/>
		</div>
	);
};

export default Description;