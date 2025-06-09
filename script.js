const isPowerOfTwo = (number) => {
  //your code here
	if (number < 1) return false;

  while (number > 1) {
    if (number % 2 !== 0) {
      return false;
    }
    number = number / 2;
  }

  return true;
};



const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
