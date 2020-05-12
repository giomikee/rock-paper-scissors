/*
 * Created on Tue May 12 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import Header from './components/Header';
import Router from './components/Router';
import * as serviceWorker from './serviceWorker';

WebFont.load({
	google: { families: ['VT323', 'monospace'] }
});

ReactDOM.render(
	<React.StrictMode>
		<Container>
			<Header />
			<Router />
		</Container>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
