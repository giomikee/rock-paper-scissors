/*
 * Created on Fri May 15 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

function LoaderModal({ showLoader, toggleLoader, pickBotMove }) {
	return (
		<Modal
			show={showLoader}
			onShow={() => setTimeout(toggleLoader, 2000)}
			onExit={pickBotMove}
			onHide={() => {}}
			centered
		>
			<Modal.Body>
				Rock
				<br />
				Paper
				<br />
				Scissors
				<br />
				Shoot!
			</Modal.Body>
		</Modal>
	);
}

LoaderModal.propTypes = {
	showLoader: PropTypes.bool.isRequired,
	toggleLoader: PropTypes.func.isRequired,
	pickBotMove: PropTypes.func.isRequired
};

export default LoaderModal;
