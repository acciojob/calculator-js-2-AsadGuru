//your JS code here. If required.

const display = document.getElementById('display');
const buttons = document.queerySelectorAll('button');

buttons.forEach(button => {
	button.addEventListener('click', () => {
		if (button.id  === 'c') {
			display.value = '';
		} else if (button.id === 'back') {
			display.value = display.value.slice(0,-1);
		} else if (button.id === 'equal') {
			try {
				display.value = eval(display.value.replace(/divi/g, '/').replace(/\*/g,'*'));
			} catch {
				display.value = 'Error';
			}
		} else {
			display.value += button.id;
		}
	});
});
