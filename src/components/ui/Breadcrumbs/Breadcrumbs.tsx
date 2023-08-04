import {FC} from 'react';

import Container from "@/components/ui/Container/Container";

import styles from './Breadcrumbs.module.scss'

const Breadcrumbs: FC = () => {
	return (
		<div className={styles.breadcrumbs}>
			<Container>
				<ul className={styles.list}>
					<li className={styles.item}><a className={styles.link} href="">Main</a></li>
					<li className={styles.item}><a className={styles.link} href="">Women</a></li>
					<li className={styles.item}><a className={styles.link} href="">Clothes</a></li>
					<li className={styles.item}><a className={styles.link} href="">Coat</a></li>
				</ul>
			</Container>
		</div>
	);
};

export default Breadcrumbs;