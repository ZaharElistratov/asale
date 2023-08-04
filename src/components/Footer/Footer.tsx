import {FC, useState} from 'react';

import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";

import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.inner}>
					<div className={styles.top}>
						<a className={styles.logo} href="#">
							<Icon id='logo' width={139} height={34}/>
						</a>
						<nav className={styles.nav}>
							<h3 className={styles.title}>Help</h3>
							<ul className={styles.list}>
								<li className={styles.item}>
									<a className={styles.link} href="#">?????</a>
								</li>
								<li className={styles.item}>
									<a className={styles.link} href="#">?????</a>
								</li>
								<li className={styles.item}>
									<a className={styles.link} href="#">?????</a>
								</li>
							</ul>
						</nav>
						<nav className={styles.nav}>
							<h3 className={styles.title}>About us</h3>
							<ul className={styles.list}>
								<li className={styles.item}>
									<a className={styles.link} href="#">Contact us</a>
								</li>
								<li className={styles.item}>
									<a className={styles.link} href="#">Partners</a>
								</li>
								<li className={styles.item}>
									<a className={styles.link} href="#">Investors</a>
								</li>
							</ul>
						</nav>
						<nav className={styles.social}>
							<h3 className={styles.title}>We are in social networks</h3>
							<ul className={styles.list}>
								<li className={styles.item}>
									<a className={styles.link} href="#">
										<Icon id='instagram' width={32} height={32}/>
									</a>
								</li>
								<li className={styles.item}>
									<a className={styles.link} href="#">
										<Icon id='twitter' width={32} height={32}/>
									</a>
								</li>
								<li className={styles.item}>
									<a className={styles.link} href="#">
										<Icon id='facebook' width={32} height={32}/>
									</a>
								</li>
								<li className={styles.item}>
									<a className={styles.link} href="#">
										<Icon id='discord' width={32} height={32}/>
									</a>
								</li>
								<li className={styles.item}>
									<a className={styles.link} href="#">
										<Icon id='pinterest' width={32} height={32}/>
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className={styles.bottom}>
						<p className={styles.faq}>@Copyright 2023 ASALE</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;