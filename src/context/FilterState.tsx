import React, {FC, ReactNode, createContext, useState} from 'react';

export const FilterContext = createContext({
	isFilterOpen: true,
	toggleFilterMode: () => {},
});

interface FilterStateProps {
	children: ReactNode
}

const FilterState: FC<FilterStateProps> = ({ children }) => {
	const [isFilterOpen, toggleFilter] = useState(false);
	
	const toggleFilterMode = () => {
		toggleFilter(!isFilterOpen);
	}
	
	return (
		<FilterContext.Provider value={{ isFilterOpen, toggleFilterMode }}>{children}</FilterContext.Provider>
	);
};

export default FilterState;