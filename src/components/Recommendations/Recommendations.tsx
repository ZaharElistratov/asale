import {FC} from 'react';

import Container from "@/components/ui/Container/Container";
import Slider from "@/components/ui/Slider/Slider";
import Card from "@/components/ui/Card/Card";

import data from "@/components/Recommendations/data";

import styles from './Recomaendations.module.scss'

const sliderBreakpoints = {
	1400: {
		slidesPerView: 5,
		spaceBetween: 12
	},
	768: {
		slidesPerView: 3,
		spaceBetween: 20
	},
	320: {
		slidesPerView: 2,
		spaceBetween: 12
	}
}

const Recommendations: FC = () => {
	return (
		<section className={styles.recommendations}>
			<Container>
				<div className={styles.inner}>
					<div>
						<h2 className={styles.title}>New in</h2>
						<Slider
							className={styles.slider}
							id='new'
							breakpoints={sliderBreakpoints}
						>
							{data.map((item, index) =>
								<Card link={item.link} image={item.image} title={item.title} text={item.text} price={item.price}
											originalPrice={item.originalPrice} key={index}/>
							)}
						</Slider>
					</div>
					<div>
						<h2 className={styles.title}>Top of the week</h2>
						<Slider
							className={styles.slider}
							id='top'
							breakpoints={sliderBreakpoints}
						>
							{data.map((item, index) =>
								<Card link={item.link} image={item.image} title={item.title} text={item.text} price={item.price}
											originalPrice={item.originalPrice} key={index}/>
							)}
						</Slider>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Recommendations;