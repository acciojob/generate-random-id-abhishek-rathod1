function makeid(l) {
  // write your code here
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	let result = ""
	let charactersLength = characters.length;
	let counter = 0;
	while (counter<l) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter++;
	}
	return result;
}

// Do not change the code below.d
const l = prompt("Enter a number.");
alert(makeid(l));
