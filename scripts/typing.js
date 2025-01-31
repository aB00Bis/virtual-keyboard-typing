const paragraphs = [
	'The quick brown fox jumps over the lazy dog, unexpectedly twisting mid-air to avoid an unseen obstacle.',
	'Despite the overwhelmingly intricate nature of quantum mechanics, some physicists remain undeterred in their pursuit of unraveling the mysteries of the universe',
	'Time flies like an arrow; fruit flies like a banana, yet nobody ever stops to consider the philosophical implications of such an absurd comparison.',
	'A sophisticated algorithm leveraging recursive neural networks efficiently predicts anomalies in high-dimensional datasets, optimizing computational performance.',
	'On 07/04/1776, the Declaration of Independence was signed, marking a pivotal moment in U.S. history; however, was it truly ‘independence’ or merely a new form of governance?',
];

let inputField = document.querySelector('.input-field');
let text = document.querySelector('.text p');
let charIndex = 0;

function initParagraph() {
	let randText = Math.floor(Math.random() * paragraphs.length);
	paragraphs[randText].split('').forEach(item => {
		let span = `<span>${item}</span>`;
		text.innerHTML += span;
	});

	text.addEventListener('click', () => inputField.focus());
	document.addEventListener('keydown', () => inputField.focus());
}

function initTyping() {
	const characters = document.querySelectorAll('span');
	let typeChar = inputField.value.split('')[charIndex];

	if (typeChar == null) {
		charIndex--;
		characters[charIndex].classList.remove('correct', 'inCorrect');
	} else {
		if (characters[charIndex].innerText === typeChar) {
			characters[charIndex].classList.add('correct');
		} else {
			characters[charIndex].classList.add('inCorrect');
		}
		charIndex++;
	}
	characters.forEach(item => item.classList.remove('cursorTyping'));
	characters[charIndex.classList.add('cursorTyping')];
}

initParagraph();
inputField.addEventListener('input', initTyping);
