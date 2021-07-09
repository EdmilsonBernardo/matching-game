import BoardGame from './src/objects/BoardGame';
import PlayerScore from './src/components/PlayerScore';
import './src/styles/settings/colors.css';
import './src/styles/generic/generic.css';
import './src/styles/elements/base.css';

const $root = document.querySelector("#root");
const $htmlPlayerScore1 = PlayerScore(1);
const $htmlPlayerScore2 = PlayerScore(2);
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML('beforeend', $htmlPlayerScore1);
$root.insertAdjacentHTML('beforeend', $htmlPlayerScore2);
$root.insertAdjacentHTML('beforeend', $htmlBoardGame);
