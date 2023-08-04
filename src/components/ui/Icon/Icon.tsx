import {FC, HTMLAttributes} from 'react';

interface Icon extends HTMLAttributes<HTMLOrSVGElement> {
	id: string,
	width: number,
	height: number
}
const Icon:FC<Icon> = ({className, id, width, height}) => {
	return (
		<svg className={className} width={width} height={height}>
			<use href={`/img/icons.svg#${id}`}/>
		</svg>
	);
};

export default Icon;