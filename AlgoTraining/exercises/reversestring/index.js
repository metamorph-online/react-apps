// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

	var reversed = [],
	mystr = [];

	mystr = str.split('');

	for(let character of mystr){
		reversed.unshift(character);
	}

	return reversed.join('');
}

module.exports = reverse;
