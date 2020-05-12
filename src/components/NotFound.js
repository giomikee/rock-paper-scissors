/*
 * Created on Tue May 12 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import { Col, Row, Alert } from 'react-bootstrap';

export default function NotFound() {
	return (
		<Row>
			<Col sm='12'>
				<Alert variant='danger'>
					<Alert.Heading>Page Not Found</Alert.Heading>
				</Alert>
			</Col>
		</Row>
	);
}
