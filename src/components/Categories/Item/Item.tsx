import {FC} from 'react';

import Image from "next/image";

import styles from './Item.module.scss'

interface Item {
	title: string,
	img: string,
}

const Item: FC<Item> = ({title, img}) => {
	return (
		<a className={styles.item} href='#'>
			<h3 className={styles.title}>{title}</h3>
			<Image className={styles.img} src={`/img/home/categories/${img}.png`} alt='' width={100} height={120}/>
		</a>
	);
};

export default Item;