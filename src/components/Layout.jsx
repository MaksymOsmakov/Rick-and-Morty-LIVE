import React from 'react';
import s from '../scss/Main.module.scss'
import R_A_M_IMG from '../img/rick-and-morty-portal.png'
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
	const location = useLocation();
	return (
		<>
			<main className={s.main}>

				<div className={s.logo_container}>
					<h1>
						<a href="https://rickandmortyapi.com/" target='_blank' rel='noreferrer'>Rick and Morty API</a>
					</h1>
					<img src={R_A_M_IMG} alt="rick and morty" />
				</div>

				<div className={s.content_container}>
					<div className={s.nav}>
						{
							location.pathname === '/'
								? <NavLink to='/search'>Search for character</NavLink>
								: <NavLink to='/'>🢀Back</NavLink>
						}
					</div>
					<Outlet />
				</div>

			</main>
		</>
	);
};


export default Layout;