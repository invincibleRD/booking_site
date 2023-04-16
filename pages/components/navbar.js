import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import  styles from './styles.module.css'
import Link from "next/link";

function Navbar() {
	const [nav,setNav] =useState('');

	return (
		<nav>
		  <ul>
			<li>
			  <Link legacyBehavior href="/">
				<a>Home</a>
			  </Link>
			</li>
			<li>
			  <Link legacyBehavior href="/teachers">
				<a>Teachers</a>
			  </Link>
			</li>
			<li>
			  <Link legacyBehavior href="/about">
				<a>About</a>
			  </Link>
			</li>
			<li>
			  <Link legacyBehavior href="/contact">
				<a>Contact</a>
			  </Link>
			</li>
		  </ul>
	
		  <style jsx>{`
			nav {
			  display: flex;
			  justify-content: space-between;
			  align-items: center;
			}
	
			ul {
			  display: flex;
			  list-style: none;
			}
	
			li {
			  margin-right: 1rem;
			}
	
			a {
				font-size:1.3rem;
			  text-decoration: none;
			  color: #333;
			}
	
			@media (max-width: 600px) {
			  nav {
				visibility:hidden;
				flex-direction: column;
			  }
	
			  ul {
				margin-top: 1rem;
			  }
	
			  li {
				margin-right: 0;
				margin-bottom: 0.5rem;
			  }
			}
		  `}</style>
		</nav>
	  );
}

export default Navbar;