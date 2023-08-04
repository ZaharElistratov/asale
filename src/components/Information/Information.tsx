import {FC} from 'react';

import Container from "@/components/ui/Container/Container";
import Description from "@/components/Information/Description/Description";
import Buy from "@/components/Information/Buy/Buy";
import Option from "@/components/Information/Option/Option";

import styles from './Information.module.scss'

const Information: FC = () => {
	return (
		<section className={styles.information}>
			<Container>
				<div className={styles.inner}>
					<Description/>
					<Buy/>
					<div className={styles.options}>
						<Option/>
						<Option/>
						<Option/>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Information;