export const HOME = '/rock-paper-scissors';
export const MOVES = ['rock', 'paper', 'scissors'];

export const hasPlayerWon = (playerMove, botMove) => {
	const [rock, paper, scissors] = MOVES;

	return (
		(playerMove === paper && botMove === rock) ||
		(playerMove === rock && botMove === scissors) ||
		(playerMove === scissors && botMove === paper)
	);
};
export const isADraw = (playerMove, botMove) => playerMove === botMove;
