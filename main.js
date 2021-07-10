import BoardGame from './src/objects/BoardGame';
import ScoreBoard from './src/objects/ScoreBoard';
import PlayerName from './src/components/PlayerName';
import PlayerScore from './src/components/PlayerScore';
import './src/styles/settings/colors.css';
import './src/styles/generic/generic.css';
import './src/styles/elements/base.css';

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    'beforeend',
    `
    ${ ScoreBoard() }
    ${ BoardGame(6) }
    `
);
