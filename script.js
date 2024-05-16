const numPlayersInput = document.getElementById('num-players');
const continueBtn = document.getElementById('continue-btn');
const screen = document.getElementById('screen');

numPlayersInput.addEventListener('input', () => {
  const numPlayers = numPlayersInput.value;

  screen.innerHTML = '';

  for (let i = 0; i < numPlayers; i++) {
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player');
    playerDiv.innerHTML = `
      <h2>Player ${i + 1}</h2>
      <button class="roll-btn">Roll Dice</button>
      <div class="score">0</div>
    `;
    screen.appendChild(playerDiv);

    const rollBtn = playerDiv.querySelector('.roll-btn');
    rollBtn.addEventListener('click', () => {
      const score = Math.floor(Math.random() * 6) + 1;
      playerDiv.querySelector('.score').textContent = score;
    });
  }

  continueBtn.style.display = 'none';
});