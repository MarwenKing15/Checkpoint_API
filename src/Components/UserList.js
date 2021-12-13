import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import UserCard from "./UserCard";
import "./styles/UserList.css";

const UserList = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => setUsers(res.data))
			.then(() => setLoading(false))
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className="content">
			<Container>
				<Row>
					{loading ? (
						<h1>Loading</h1>
					) : (
						users.map((item, index) => (
							<Col key={index}>
								<UserCard item={item} />
							</Col>
						))
					)}
				</Row>
			</Container>
		</div>
	);
};

export default UserList;
