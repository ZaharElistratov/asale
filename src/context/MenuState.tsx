import React, {FC, ReactNode, createContext, useState} from 'react';

export const MenuContext = createContext({
	isMenuOpen: true,
	toggleMenuMode: () => {},
});

interface MenuState {
	children: ReactNode
}

const MenuState: FC<MenuState> = ({ children }) => {
	const [isMenuOpen, toggleMenu] = useState(false);

	const toggleMenuMode = () => {
		toggleMenu(!isMenuOpen);
	}

	return (
		<MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>{children}</MenuContext.Provider>
	);
};

export default MenuState;