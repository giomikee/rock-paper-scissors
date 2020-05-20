/*
 * Created on Wed May 20 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ButtonGroup, Button } from 'react-bootstrap';
import EndGameModal from './EndGameModal';

export default class ResultsModal extends Component {
	static propTypes = {
		show: PropTypes.bool.isRequired,
		isADraw: PropTypes.bool,
		winner: PropTypes.string,
		resetMatch: PropTypes.func.isRequired,
		endGame: PropTypes.func.isRequired,
		firstPlayerScore: PropTypes.number,
		secondPlayerScore: PropTypes.number
	};

	state = {
		showEndGameModal: false
	};

	renderHeader = () => {
		const { isADraw, winner } = this.props;

		if (isADraw) {
			return "It's a Draw!"; // eslint-disable-line quotes
		}

		return winner === 'firstPlayer' ? 'You Won!' : 'You Lost';
	};

	showEndGameModal = () => this.setState({ showEndGameModal: true });

	render() {
		const {
			show,
			firstPlayerScore,
			secondPlayerScore,
			resetMatch,
			endGame
		} = this.props;

		return (
			<>
				<Modal show={show} onHide={() => {}} centered>
					<Modal.Header>
						<h3>{this.renderHeader()}</h3>
					</Modal.Header>
					<Modal.Body>
						<h3>Scores</h3>
						Player 1 - {firstPlayerScore} | Player 2 -{' '}
						{secondPlayerScore}
						<br />
						<ButtonGroup>
							<Button onClick={resetMatch} variant='success'>
								Play again
							</Button>
							<Button
								variant='secondary'
								onClick={() => endGame(this.showEndGameModal)}
							>
								End game
							</Button>
						</ButtonGroup>
					</Modal.Body>
				</Modal>
				<EndGameModal showEndGameModal={this.state.showEndGameModal} />
			</>
		);
	}
}
