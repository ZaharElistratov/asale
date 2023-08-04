import {FC, ReactNode} from 'react';

import styles from './Container.module.scss'
import cn from "classnames";

interface Container {
	className?: string,
	children: ReactNode
}

const Container: FC<Container> = ({className, children}) => {
	return (
		<div className={cn(styles.container, className)}>
			{children}
		</div>
	);
};

export default Container;