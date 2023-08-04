import {FC} from 'react';

import data from "@/components/Catalog/data";

import Container from "@/components/ui/Container/Container";
import Filter from "@/components/Catalog/Filter/Filter";
import Card from "@/components/ui/Card/Card";

import styles from './Catalog.module.scss'
import useMediaQuery from "@/hooks/useMediaQuery";

const Catalog: FC = () => {
	const isTablet = useMediaQuery('(max-width: 1399px)')

	return (
		<section className={styles.catalog}>
			<Container>
				<div className={styles.inner}>
					{isTablet ? null :
						<Filter/>
					}
					<div className={styles.content}>
						{data.map((item, index) =>
							<Card link={item.link} image={item.image} title={item.title} text={item.text} price={item.price}
										originalPrice={item.originalPrice} key={index}/>
						)}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Catalog;