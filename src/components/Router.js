/*
 * Created on Tue May 12 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GameMode from './GameMode';
import App from './App';
import NotFound from './NotFound';
import { HOME } from '../constants';

export default function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={HOME} component={GameMode} />
				<Route path={`${HOME}/play/:gameId`} component={App} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}
