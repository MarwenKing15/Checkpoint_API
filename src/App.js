import { useState, useEffect } from "react";

import { Switch, Route } from "react-router-dom";

import axios from "axios";

import UserList from "./Components/UserList";
import NavBar from "./Components/NavBar";
import PrivateRoute from "./Components/PrivateRoute";
import Description from "./Components/Description";
import Home from "./Components/Home";

import "./App.css";

function App() {
	const [isAuth, setIsAuth] = useState(false);
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => setUsers(res.data))
			.then(() => setLoading(false))
			.catch((err) => console.log(err));
	}, []);
	console.log(loading);

	return (
		<div className="App">
			<NavBar isAuth={isAuth} setIsAuth={setIsAuth} />
			<Switch>
				<Route exact path="/" component={Home} />
				<PrivateRoute
					isAuth={isAuth}
					path="/listofusers"
					component={UserList}
				/>
				<Route
					path="/description/:id"
					component={(props) => <Description {...props} users={users} />}
				/>
			</Switch>
		</div>
	);
}

export default App;
