import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<div style={{textAlign: "center", padding:"50px", fontSize:"2rem"}}>
			<span>Page not found... </span>
			<NavLink to='/' style={{textDecoration: "none", color:"red"}}>go Home</NavLink>
		</div>
	);
};


export default NotFoundPage;