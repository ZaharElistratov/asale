import {FC} from "react";

import Container from "@/components/ui/Container/Container";
import Slider from "@/components/ui/Slider/Slider";

import styles from './Intro.module.scss';

const Intro: FC = () => {
	return (
		<section className={styles.intro}>
			<Container>
				<Slider id='intro'>
					<div className={styles.slide}>
						<h1 className={styles.title}>catch your luck</h1>
						<p className={styles.text}>Сhoose the best offer</p>
					</div>
					<div className={styles.slide}>
						<h1 className={styles.title}>catch your luck</h1>
						<p className={styles.text}>Сhoose the best offer</p>
					</div>
				</Slider>
			</Container>
		</section>
	);
};

export default Intro;