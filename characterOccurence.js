/**

3.Find the count characters occurrence of the string.

Input:
        abaabccabbanam
Output: 
a - 6 b - 4 c - 2 n - 1 m - 1 

**/

var input ="abaabccabbanam";

function charactersOccurrences(input) {
	var output = {};

	for (var i = 0; i < input.length; i++) {
		var character = input.charAt(i);
		if(output.hasOwnProperty(character)){
			output[character] = output[character] + 1;
		}else{
			output[character] = 1;
		}
	}
	console.log('output===>' , output);
}

charactersOccurrences(input);
charactersOccurrences('devaraj');