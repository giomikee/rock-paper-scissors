/*
 * Created on Tue May 12 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Header from './Header';
import GameMode from './GameMode';
import App from './App';
import NotFound from './NotFound';

export default function Router() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Link to='/' className='header-link'>
				<Header />
			</Link>
			<Switch>
				<Route exact path='/' component={GameMode} />
				<Route path='/play/:gameId' component={App} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}
