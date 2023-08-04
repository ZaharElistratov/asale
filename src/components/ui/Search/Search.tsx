import {FC} from 'react';
import cn from "classnames";

import Icon from "@/components/ui/Icon/Icon";

import styles from "@/components/ui/Search/Search.module.scss";

interface SearchProps {
	className?: string
}

const Search: FC<SearchProps> = ({className}) => {
	return (
		<label className={cn(styles.search, className)}>
			<div className={styles.left}>
				<Icon id='search' width={24} height={24}/>
				<input className={styles.field} type="text" placeholder='Search'/>
			</div>
			<button className={styles.button} type='button'>
				<Icon id='cross' width={24} height={24}/>
			</button>
		</label>
	);
};

export default Search;