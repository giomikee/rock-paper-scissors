import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { HOME, MOVES } from '../constants';

export default class Player extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		move: PropTypes.string,
		pickPlayerMove: PropTypes.func.isRequired
	};
	renderMoves() {
		return (
			<ButtonGroup>
				{MOVES.map((move) => (
					<Button
						key={move}
						onClick={() => this.props.pickPlayerMove(move)}
					>
						<img
							src={`${HOME}/images/${move}.png`}
							alt={move}
							height='20'
							width='20'
						/>
					</Button>
				))}
			</ButtonGroup>
		);
	}

	render() {
		const { name, move } = this.props;

		return (
			<Card
				bg='secondary'
				border={name === 'Player 1' ? 'primary' : 'danger'}
			>
				<Card.Header>{name}</Card.Header>
				<Card.Body>
					<Card.Title>
						{move ? 'Your Move' : 'Pick a move'}
					</Card.Title>
					{move ? (
						<img
							src={`${HOME}/images/${move}.png`}
							alt={move}
							height='80'
							width='80'
						/>
					) : (
						this.renderMoves()
					)}
				</Card.Body>
			</Card>
		);
	}
}
