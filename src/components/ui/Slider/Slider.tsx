import {FC, ReactNode, Children} from "react";
import cn from "classnames";

import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';

import SliderNavigation from '@/components/ui/Navigation/Navigation';

import styles from '@/components/ui/Slider/Slider.module.scss'
import useMediaQuery from "@/hooks/useMediaQuery";

interface SliderProps {
	children: ReactNode,
	className?: string,
	id: string,
	slidesPerView?: number,
	spaceBetween?: number,
	breakpoints?: any,
}

const Slider: FC<SliderProps> = ({children, className, id, ...props}) => {
	const isTablet = useMediaQuery('(max-width: 1399px)')

	return (
		<div className={cn(styles.wrapper, className)}>
			<Swiper
				className={styles.slider}
				modules={[Navigation]}
				navigation={{
					prevEl: `.${id}NavigationPrev`,
					nextEl: `.${id}NavigationNext`
				}}
				{...props}
			>
				{Children.map(children, (child: ReactNode) => (
					<SwiperSlide>{child}</SwiperSlide>
				))}
			</Swiper>
			{isTablet ? null : <SliderNavigation id={id}/>}
		</div>
	)
}

export default Slider