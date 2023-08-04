import {FC} from 'react';

import styles from "./Table.module.scss";

const Table: FC = () => {
	return (
		<table className={styles.table}>
			<tbody>
			<tr className={styles.row}>
				<th className={styles.title}>Состав</th>
				<td className={styles.value}>Хлопок - 55%, Лен - 45%</td>
			</tr>
			<tr className={styles.row}>
				<th className={styles.title}>Размер товара на модели</th>
				<td className={styles.value}>S INTc</td>
			</tr>
			<tr className={styles.row}>
				<th className={styles.title}>Параметры модели</th>
				<td className={styles.value}>86-62-89</td>
			</tr>
			<tr className={styles.row}>
				<th className={styles.title}>Рост модели на фото</th>
				<td className={styles.value}>175 см</td>
			</tr>
			<tr className={styles.row}>
				<th className={styles.title}>Длина</th>
				<td className={styles.value}>117 см</td>
			</tr>
			<tr className={styles.row}>
				<th className={styles.title}>Длина рукава</th>
				<td className={styles.value}>62 см</td>
			</tr>
			</tbody>
		</table>
	);
};

export default Table;