import {FC, useContext} from 'react';
import {FilterContext} from "@/context/FilterState";

import Icon from "@/components/ui/Icon/Icon";
import Price from "@/components/ui/Price/Price";

import styles from "./Filter.module.scss";

const Filter: FC = () => {
	const {isFilterOpen, toggleFilterMode} = useContext(FilterContext);

	return (
		<>
			{
				isFilterOpen &&
          <div className={styles.menu}>
		          <div className={styles.inner}>
                  <div className={styles.head}>
                      <h3 className={styles.title}>Filters</h3>
                      <button className={styles.close} onClick={() => toggleFilterMode()}>
                          <Icon id='cross' width={24} height={24}/>
                      </button>
                  </div>
                  <Price className={styles.price}/>
                  <nav className={styles.nav}>
                      <a className={styles.link} href="#">Brands</a>
                      <a className={styles.link} href="#">Color</a>
                      <a className={styles.link} href="#">Size</a>
                      <a className={styles.link} href="#">Materials</a>
                  </nav>
		          </div>
          </div>
			}

		</>
	);
};

export default Filter;