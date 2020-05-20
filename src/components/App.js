/*
 * Created on Wed May 20 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import Player from './Player';
import Bot from './Bot';
import { HOME, MOVES, hasPlayerWon, isADraw } from '../constants';
import LoaderModal from './LoaderModal';
import ResultsModal from './ResultsModal';

export default class App extends Component {
	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				gameId: PropTypes.string.isRequired
			}).isRequired
		}).isRequired
	};

	state = {
		firstPlayer: {
			move: null,
			score: 0
		},
		secondPlayer: {
			isHuman: this.props.match.params.gameId !== 'solo',
			move: null,
			score: 0
		},
		showLoader: false,
		resultsModal: {
			show: false,
			isADraw: false,
			winner: null
		}
	};

	pickPlayerMove = (player, move) => {
		const playerState = this.state[player];

		playerState.move = move;
		this.setState({ [player]: playerState }, this.toggleLoader);
	};

	toggleLoader = () => {
		const { showLoader } = this.state;

		this.setState({ showLoader: !showLoader });
	};

	pickBotMove = () => {
		const { secondPlayer } = this.state;
		const moveIndex = Math.floor(Math.random() * MOVES.length);

		secondPlayer.move = MOVES[moveIndex];
		this.setState({ secondPlayer }, this.checkResults);
	};

	showResultsModal = () => {
		const { resultsModal } = this.state;

		resultsModal.show = true;
		setTimeout(() => this.setState({ resultsModal }), 1000);
	};

	checkResults = () => {
		const { firstPlayer, secondPlayer, resultsModal } = this.state;

		if (isADraw(firstPlayer.move, secondPlayer.move)) {
			resultsModal.isADraw = true;

			this.setState({ resultsModal }, this.showResultsModal);
		} else {
			const winner = `${
				hasPlayerWon(firstPlayer.move, secondPlayer.move)
					? 'first'
					: 'second'
			}Player`;
			const winnerState = this.state[winner];

			winnerState.score++;
			resultsModal.winner = winner;

			this.setState(
				{ [winner]: winnerState, resultsModal },
				this.showResultsModal
			);
		}
	};

	resetMatch = () => {
		const { firstPlayer, secondPlayer, resultsModal } = this.state;

		firstPlayer.move = null;
		secondPlayer.move = null;
		resultsModal.show = false;
		resultsModal.isADraw = false;

		this.setState({ firstPlayer, secondPlayer, resultsModal });
	};

	endGame = (callback) => {
		const { resultsModal } = this.state;

		resultsModal.show = false;

		this.setState({ resultsModal }, callback);
	};

	render() {
		const {
			firstPlayer,
			secondPlayer,
			showLoader,
			resultsModal
		} = this.state;

		return (
			<Row>
				<Col sm='5'>
					<Player
						name='Player 1'
						move={firstPlayer.move}
						pickPlayerMove={(move) =>
							this.pickPlayerMove('firstPlayer', move)
						}
					/>
				</Col>
				<Col sm='2'>
					<img
						src={`${HOME}/images/versus.png`}
						alt='versus'
						height='130'
						width='175'
					/>
				</Col>
				<Col sm='5'>
					{secondPlayer.isHuman ? (
						<Player
							name='Player 2'
							move={secondPlayer.move}
							pickPlayerMove={(move) =>
								this.pickPlayerMove('secondPlayer', move)
							}
						/>
					) : (
						<Bot move={secondPlayer.move} />
					)}
				</Col>
				<LoaderModal
					showLoader={showLoader}
					toggleLoader={this.toggleLoader}
					pickBotMove={this.pickBotMove}
				/>
				<ResultsModal
					show={resultsModal.show}
					isADraw={resultsModal.isADraw}
					winner={resultsModal.winner}
					firstPlayerScore={firstPlayer.score}
					secondPlayerScore={secondPlayer.score}
					resetMatch={this.resetMatch}
					endGame={this.endGame}
				/>
			</Row>
		);
	}
}
