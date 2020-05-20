/*
 * Created on Wed May 20 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

function EndGameModal({ showEndGameModal }) {
	return (
		<Modal show={showEndGameModal} centered onHide={() => {}}>
			<Modal.Header>
				<h3>Thanks for playing!</h3>
			</Modal.Header>
			<Modal.Body>
				<a
					href='https://github.com/giomikee?tab=repositories'
					target='_blank'
					rel='noopener noreferrer'
				>
					Click here to check out more projects
				</a>
			</Modal.Body>
		</Modal>
	);
}

EndGameModal.propTypes = {
	showEndGameModal: PropTypes.bool.isRequired
};

export default EndGameModal;
