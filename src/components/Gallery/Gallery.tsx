import {FC} from 'react';
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

import Container from "@/components/ui/Container/Container";
import Slider from "@/components/ui/Slider/Slider";

import styles from './Gallery.module.scss'

const sliderBreakpoints = {
	768: {
		slidesPerView: 2,
		spaceBetween: 20
	},
	320: {
		slidesPerView: 1,
		spaceBetween: 0
	}
}

const Gallery: FC = () => {
	const isTablet = useMediaQuery('(max-width: 1399px)')
	
	return (
		<div className={styles.gallery}>
			<Container className={styles.container}>
				{isTablet ?
					<Slider
						className={styles.slider}
						id='gallery'
						breakpoints={sliderBreakpoints}
					>
				<div className={styles.img}>
					<Image src='/img/product/img-1.png' alt='' fill/>
				</div>
				<div className={styles.img}>
					<Image src='/img/product/img-2.png' alt='' fill/>
				</div>
				<div className={styles.img}>
					<Image src='/img/product/img-3.png' alt='' fill/>
				</div>
				<div className={styles.img}>
					<Image src='/img/product/img-4.png' alt='' fill/>
				</div>
			</Slider>
			:
			<div className={styles.inner}>
				<div className={styles.img}>
					<Image src='/img/product/img-1.png' alt='' fill/>
				</div>
				<div className={styles.img}>
					<Image src='/img/product/img-2.png' alt='' fill/>
				</div>
				<div className={styles.img}>
					<Image src='/img/product/img-3.png' alt='' fill/>
				</div>
				<div className={styles.img}>
					<Image src='/img/product/img-4.png' alt='' fill/>
				</div>
			</div>
			}
		</Container>
</div>
)
	;
};

export default Gallery;