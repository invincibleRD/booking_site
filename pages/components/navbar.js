import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import  styles from './styles.module.css'

function Navbar() {
	const [navRef ,setNavRef] =useState("");

	const showNavbar = () => {  
		setNavRef('responsive_nav')
	};

	return (
		<header className={`${styles.header} ${navRef}`}>
			<h3>LOGO</h3>
			<nav className={`${styles.nav} ${styles.navRef}`} >
				<a className={styles.a} href="/#">Home</a>
				<a className={styles.a} href="/#">My work</a>
				<a className={styles.a} href="/#">Blog</a>
				<a className={styles.a} href="/#">About me</a>
				<button
					className={`${styles.nav_btn} ${styles.nav_close_btn}`}
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav  >
			<button
				className={styles.nav_btn}
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;