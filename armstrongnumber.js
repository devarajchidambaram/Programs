function isArmstrongNumber(n) {
	var armstrong = n;
	var count = 0;
	var remainder;
	while(n > 0){
		remainder = n%10;
		count += Math.pow(remainder,3);
		n = parseInt(n/10);
	}

	if(armstrong === count){
		console.log( armstrong + ' is an armstrong number.');
	}else{
		console.log( armstrong + ' is not an armstrong number.')
	}
}

function generateArmstrongNumber(n){
var count,remainder,iterate;
var results = [];
var pow;
 for (var i = 1; i < n; i++) {
  	
  	 iterate = i;
	 count = 0;
	 remainder;

	 //Power of language
	 pow = i.toString().length;

	while(iterate > 0){
		remainder = iterate%10;
		count += Math.pow(remainder,pow);
		iterate = parseInt(iterate/10);
	}

	if(i === count){
		results.push(i);
	}
 }
 
  console.log( 'armstrong number are ' , results);
}

isArmstrongNumber(1);
generateArmstrongNumber(100000);