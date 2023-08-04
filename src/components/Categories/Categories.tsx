import {FC} from 'react';

import data from "@/components/Categories/data";

import Container from "@/components/ui/Container/Container";
import Item from "@/components/Categories/Item/Item";

import styles from './Categories.module.scss'

const Categories: FC = () => {
	return (
		<section className={styles.categories}>
			<Container>
				<div className={styles.list}>
					{data.map((item, index) =>
						<Item title={item.title} img={item.img} key={index}/>
					)}
				</div>
			</Container>
		</section>
	);
};

export default Categories;