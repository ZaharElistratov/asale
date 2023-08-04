import {FC} from 'react';
import cn from "classnames";

import Icon from "@/components/ui/Icon/Icon";

import styles from "@/components/ui/Navigation/Navigation.module.scss";

interface NavigationProps {
	id: string
}

const Navigation: FC<NavigationProps> = ({id}) => {
	return (
		<>
			<button className={cn(styles.navigation, styles.navigationPrev, `${id}NavigationPrev`)}>
				<Icon id='arrow-right' width={44} height={44}/>
			</button>
			<button className={cn(styles.navigation, styles.navigationNext, `${id}NavigationNext`)}>
				<Icon id='arrow-left' width={44} height={44}/>
			</button>
		</>
	);
};

export default Navigation;