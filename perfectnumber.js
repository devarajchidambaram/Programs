/**
*Perfect numbers are sum of all positive divisors number except that number is equal to that number
*Its simple logic
*/
function generatePerfectNumbers (n) {
	for (var i = 0; i < n; i++) {
		var count =0 , arr = [];
		for (var j = 0; j <= i/2;j++) {	
			if(i%j == 0){
				count +=j;
				arr.push(j);
			}
		}

		if(count == i){
			console.log('Perfect Number ==>' , i);
		}
	}
}

generatePerfectNumbers(10000);