import React, { useEffect } from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import "./styles/Description.css";

function Description({ users, match, history }) {
	useEffect(() => {
		var item = users.find((utl) => utl.id === +match.params.id);
		console.log(item);
	}, [users, match.params.id]);
	var item = users.find((item) => item.id === +match.params.id);

	return (
		<div className="desc">
			<h2 className="ttl">More About {item.name}</h2>
			<br />
			<div>
				<h2 className="ttl">{item.name}</h2>
				<br />
				<h2 className="ttl">{item.username}</h2>
				<br />
				<h2 className="ttl">{item.email}</h2>
				<br />
				<h2 className="ttl">{item.website}</h2>
				<br />
				<h2 className="ttl">{item.phone}</h2>
			</div>
			<br />
			<div>
				<Container>
					<Row>
						<Col>
							<Card
								style={{ width: "22rem" }}
								bg={"Light".toLowerCase()}
								text={"Light".toLowerCase() === "light" ? "dark" : "white"}
								className="mb-2"
							>
								<Card.Body>
									<Card.Title>Address</Card.Title>
									<Card.Text>
										<p>{item.address.street}</p>
										<p>{item.address.suite}</p>
										<p>
											{item.address.city},{item.address.zipcode}
										</p>
										<p>
											{item.address.geo.lat} {item.address.geo.lng}
										</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card
								style={{ width: "22rem" }}
								bg={"Light".toLowerCase()}
								text={"Light".toLowerCase() === "light" ? "dark" : "white"}
								className="mb-2"
							>
								<Card.Body>
									<Card.Title>Company</Card.Title>
									<Card.Text>
										<p>{item.company.name}</p>
										<p>{item.company.catchPhrase}</p>
										<p>{item.company.bs}</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
			<button className="big-button" onClick={() => history.goBack()}>
				Go Back
			</button>
		</div>
	);
}

export default Description;
