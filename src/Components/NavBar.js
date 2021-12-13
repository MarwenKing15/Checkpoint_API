import React from "react";

import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./styles/NavBar.css";

function NavBar({ isAuth, setIsAuth }) {
	return (
		<div>
			<Navbar bg="red" variant="dark">
				<NavLink
					exact
					className="navLink"
					to="/"
					activeClassName="selectedLink"
				>
					Home
				</NavLink>
				{isAuth ? (
					<div className="authLinks">
						<NavLink
							className="navLink alink"
							activeClassName="selectedLink"
							to="/listofusers"
						>
							List of Users
						</NavLink>
						<a
							href="#LoggedOut"
							className="navLink"
							onClick={() => setIsAuth(false)}
						>
							Logout
						</a>
					</div>
				) : (
					<a
						href="#LoggedIn"
						className="navLink"
						onClick={() => setIsAuth(true)}
					>
						LogIn
					</a>
				)}
			</Navbar>
		</div>
	);
}

export default NavBar;
