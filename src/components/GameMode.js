/*
 * Created on Tue May 12 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Card, Button } from 'react-bootstrap';

export default class GameMode extends Component {
	static propTypes = {
		history: PropTypes.shape({
			push: PropTypes.func.isRequired
		})
	};
	selectGameMode = (gameId) => {
		this.props.history.push(`/play/${gameId || 'solo'}`);
	};
	render() {
		return (
			<Row>
				<Col sm='12'>
					<Card bg='light'>
						<Card.Header>Choose a Game Mode</Card.Header>
						<Card.Body>
							<Button
								variant='primary'
								onClick={() => this.selectGameMode()}
								block
							>
								Solo
							</Button>
							<Button
								variant='info'
								block
								disabled
								onClick={() => this.selectGameMode(Date.now())}
							>
								With a Friend <i>(Work in Progress)</i>
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		);
	}
}
