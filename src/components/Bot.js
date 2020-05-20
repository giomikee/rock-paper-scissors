/*
 * Created on Wed May 20 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { HOME } from '../constants';

function Bot({ move }) {
	const pickedMove = move || 'hidden';

	return (
		<Card bg='secondary' border='danger'>
			<Card.Header>Player 2</Card.Header>
			<Card.Body>
				<img
					src={`${HOME}/images/${pickedMove}.png`}
					alt={pickedMove}
					height='80'
					width='80'
				/>
			</Card.Body>
		</Card>
	);
}

Bot.propTypes = {
	move: PropTypes.string
};

export default Bot;
