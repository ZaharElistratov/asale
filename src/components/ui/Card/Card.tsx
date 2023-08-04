import {FC} from 'react';
import Image from "next/image";

import styles from './Card.module.scss'

interface Card {
	link: string,
	image: string,
	title: string,
	text: string,
	price: string
	originalPrice: string,
}

const Card: FC<Card> = (props) => {
	return (
		<a className={styles.card} href={props.link}>
			<div className={styles.image}>
				<Image src={props.image} fill alt=""/>
			</div>
			<div className={styles.offer}>
				<h3 className={styles.title}>{props.title}</h3>
				<p className={styles.text}>{props.text}</p>
				<div className={styles.price}>
					<span>{props.price}</span>
					<del>{props.originalPrice}</del>
				</div>
			</div>
		</a>
	);
};

export default Card;