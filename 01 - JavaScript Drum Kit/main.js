window.addEventListener('keydown', playSound)


function playSound(e) {
	let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	if (!audio) return; //stop the function from running all together
	audio.currentTime = 0; //rewind to the start
	audio.play();
	key.classList.add('playing');
}
let keys = document.querySelectorAll('.key')

keys.forEach(key => key.addEventListener('transitionend', removeTransition))

function removeTransition(e) {
	if (e.propertyName != "transform") return; // skip it if it's not a trandsform
	this.classList.remove('playing')
}