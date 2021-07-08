import CardGame from './src/components/CardGame';
import PlayerScore from './src/components/PlayerScore';
import './src/styles/settings/colors.css';
import './src/styles/generic/generic.css';
import './src/styles/elements/base.css';

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();
const $htmlPlayerScore1 = PlayerScore(1);
const $htmlPlayerScore2 = PlayerScore(2);

$root.insertAdjacentHTML('beforeend', $htmlPlayerScore1);
$root.insertAdjacentHTML('beforeend', $htmlPlayerScore2);

for( let i = 0; i <= 5; i++ ){
  $root.insertAdjacentHTML('beforeend', $htmlCardGame);
}
