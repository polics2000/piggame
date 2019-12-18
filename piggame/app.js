var scores, roundScore, activePlayer, gamePlaying,target;

init();

function input() {
	target = document.getElementById('target').value;
	document.getElementById('tv').textContent=target;
}

document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying){
		var dice = Math.floor(Math.random()*6) +1;

		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src='dice-'+dice+'.png';
		// var diceDOM = document.querySelector('.dice').style.display='block';
		// var diceDOM = document.querySelector('.dice').src='dice-'+dice+'.png';

		if (dice !== 1) {
			roundScore += dice;
			document.querySelector('#current-'+activePlayer).textContent=roundScore;
		} else { // if dice is '1'

		nextPlayer();

		}
	}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying) {
		// Add current score to class'player-score' (id 'score-'+activePlayer)
		scores[activePlayer] += roundScore;
		document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
		// Check if player wins
		if (scores[activePlayer]>=target) {
			document.querySelector('#name-'+activePlayer).textContent ='Winner';
			document.querySelector('.dice').style.display='none';
			document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('winner');
			gamePlaying = false;
		} else { // next player
			nextPlayer();
		}
	}

});

function nextPlayer() {

	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore=0;

	document.getElementById('current-0').textContent=0;
	document.getElementById('current-1').textContent=0;

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.querySelector('.dice').style.display='none';

	document.getElementById('')

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	target = 0;

	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent='0';
	document.getElementById('score-1').textContent='0';
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';
	document.getElementById('name-0').textContent='PLAYER 1';
	document.getElementById('name-1').textContent='PLAYER 2';
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.add('active');
}	