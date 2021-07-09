import CardGame from '../../components/CardGame';
import './styles.css';

function BoardGame(amoutCards) {
  const $htmlCardGame = CardGame();
  const $htmlBoardGame = $htmlCardGame.repeat(amoutCards);

  return `
    <section class="board-game">
      ${$htmlBoardGame}
    </section>
  `;
}

export default BoardGame;
