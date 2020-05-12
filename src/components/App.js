import React, { Component } from 'react';

export default class App extends Component {
	state = {
		firstPlayer: {
			move: null,
			score: 0
		},
		secondPlayer: {
			move: null,
			score: 0
		},
		bot: {
			move: null,
			score: 0
		}
	};

	render() {
		return <div></div>;
	}
}
