import BoardGame from './src/objects/BoardGame';
import PlayerName from './src/components/PlayerName';
import PlayerScore from './src/components/PlayerScore';
import './src/styles/settings/colors.css';
import './src/styles/generic/generic.css';
import './src/styles/elements/base.css';

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    'beforeend',
    `
    ${ PlayerName(1) }
    ${ PlayerName(2) }
    ${ BoardGame(6) }
    `
);
