import React from "react";
import { Link } from "react-router-dom";
import "./styles/UserCard.css";

const UserCard = ({ item }) => {
	return (
		<div className="cntainer">
			<div className="crd">
				<div className="box">
					<div className="content">
						<h3>{item.name}</h3>
						<p>{item.email}</p>
						<p>{item.website}</p>
						<p>{item.phone}</p>
						<Link to={`/description/${item.id}`}>Read More</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
