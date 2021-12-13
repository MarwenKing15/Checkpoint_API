import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function PrivateRoute({ component, ...rest }) {
	return (
		<div>
			{rest.isAuth ? (
				<Route component={component} {...rest} />
			) : (
				<Redirect to="/" />
			)}
		</div>
	);
}

export default PrivateRoute;
