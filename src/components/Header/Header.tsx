import {FC, useContext, useRef} from 'react';
import {MenuContext} from "@/context/MenuState";
import {FilterContext} from "@/context/FilterState";
import useMediaQuery from "@/hooks/useMediaQuery";
import useOnClickOutside from "@/hooks/useOnClickOutside";

import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import Search from "@/components/ui/Search/Search";
import SideMenu from "@/components/Header/SideMenu/SideMenu";
import Filter from "@/components/Header/Filter/Filter";

import styles from './Header.module.scss'

interface HeaderProps {
	catalog?: boolean,
	product?: boolean
}

const Header: FC<HeaderProps> = ({catalog, product}) => {
	const ref = useRef<HTMLElement>(null);
	const isTablet = useMediaQuery('(max-width: 1399px)')
	
	const {isMenuOpen, toggleMenuMode} = useContext(MenuContext);
	const {isFilterOpen, toggleFilterMode} = useContext(FilterContext);
	
	useOnClickOutside(ref, () => {
		if (isMenuOpen) {
			toggleMenuMode();
		}
	});
	
	return (
		<header className={styles.header} ref={ref}>
			<Container>
				<div className={styles.menu}>
					<div className={styles.top}>
						{isTablet ? null :
							<nav className={styles.gender}>
								<a className={styles.link} href="#">Women</a>
								<a className={styles.link} href="#">Men</a>
								<a className={styles.link} href="#">Kids</a>
							</nav>
						}
						<a className={styles.logo} href="#">
							<Icon id='logo' width={139} height={34}/>
						</a>
						{isTablet ? null :
							<div className={styles.buttons}>
								<button className={styles.button}>
									<Icon id='uk' width={24} height={24}/>
								</button>
								<button className={styles.button}>
									<Icon id='favorite' width={24} height={24}/>
								</button>
								<button className={styles.button}>
									<Icon id='account' width={24} height={24}/>
								</button>
							</div>
						}
						{isTablet &&
                <button className={styles.burger} onClick={() => toggleMenuMode()}>
                    <Icon id='menu' width={24} height={24}/>
                </button>
						}
					</div>
					{catalog && isTablet &&
              <div className={styles.center}>
                  <a className={styles.back} href="">
                      <Icon id="arrow-right" width={24} height={24}/>
                      <span>Coats</span>
                  </a>
                  <button className={styles.burger} onClick={() => toggleFilterMode()}>
                      <Icon id='filter' width={24} height={24}/>
                  </button>
              </div>
					}
					{product && isTablet ? null :
						<div className={styles.bottom}>
							{isTablet ? null :
								<nav className={styles.nav}>
									<a className={styles.link} href="#">Top Week</a>
									<a className={styles.link} href="#">New In</a>
									<a className={styles.link} href="#">Brands</a>
									<a className={styles.link} href="#">Clothing</a>
									<a className={styles.link} href="#">Shoes</a>
									<a className={styles.link} href="#">Sport</a>
									<a className={styles.link} href="#">Accessories</a>
									<a className={styles.link} href="#">Bags</a>
									<a className={styles.link} href="#">Home</a>
								</nav>
							}
							<Search className={styles.search}/>
						</div>
					}
				</div>
				{catalog && isTablet &&
            <Filter/>
				}
				<SideMenu/>
			</Container>
		</header>
	);
};

export default Header;