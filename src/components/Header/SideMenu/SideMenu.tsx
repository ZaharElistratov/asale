import {FC, useContext} from 'react';
import cn from "classnames";
import {MenuContext} from "@/context/MenuState";

import Icon from "@/components/ui/Icon/Icon";
import Search from "@/components/ui/Search/Search";

import styles from "@/components/Header/SideMenu/SideMenu.module.scss";

const SideMenu: FC = () => {
	const {isMenuOpen, toggleMenuMode} = useContext(MenuContext);

	return (
		<>
			{
				isMenuOpen &&
          <div className={styles.menu}>
		          <div className={styles.inner}>
                  <div className={styles.head}>
                      <a className={styles.logo} href="#">
                          <Icon id='logo' width={106} height={28}/>
                      </a>
                      <button className={styles.close} onClick={() => toggleMenuMode()}>
                          <Icon id='cross' width={24} height={24}/>
                      </button>
                  </div>
                  <Search className={styles.search}/>
                  <nav className={styles.gender}>
                      <a className={cn(styles.link, styles.active)} href="#">Women</a>
                      <a className={styles.link} href="#">Men</a>
                      <a className={styles.link} href="#">Kids</a>
                  </nav>
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
                  <div className={styles.buttons}>
                      <button className={styles.button}>
                          <Icon id='favorite' width={24} height={24}/>
                          <span>Favorite</span>
                      </button>
                      <button className={styles.button}>
                          <Icon id='account' width={24} height={24}/>
                          <span>Profile</span>
                      </button>
                      <button className={styles.button}>
                          <Icon id='uk' width={24} height={24}/>
                          <span>English</span>
                      </button>
                  </div>
		          </div>
          </div>
			}

		</>
	);
};

export default SideMenu;