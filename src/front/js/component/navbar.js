import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import Login from "../pages/login.jsx";
import Signup from "../pages/signup.jsx";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let btn = "";
	let sgn = ""
	
	if (store.token == null){
		console.log(store.token);
		btn = <Link to="/login"><button className="btn btn-primary">Login</button></Link>;
		sgn = <Link to="/signup"><button className="btn btn-primary">Signup</button></Link>;
	}else {
		console.log(store.token);
		btn = <button className="btn btn-primary" onClick={() => actions.logoutUser()}>Logout</button>
	}
	

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{sgn}
					{btn}
				</div>
			</div>
		</nav>
	);
};
