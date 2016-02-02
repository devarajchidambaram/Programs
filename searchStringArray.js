/**Save the string “WELCOMETOZOHOCORPORATION” in a two dimensional array and search for substring like “too” in the two dimensional string both from left to right and from top to bottom.

w e L C O
M E T O Z
O H O C O
R P O R A
T I O n   **/
var input = "WELCOMETOZOHOCORPORATION";
var MAX_LENGTH = 5;
var inputSplit = input.split('');
var x = [];

for (var i = 0; i < 5; i++) {
  x[i] = new Array(5);
}

var count = 0;
for (var i = 0; i < x.length; i++) {
  for (var j = 0; j < x.length; j++) {
    x[i][j] = inputSplit[count];
    count++;
  }
}

var findString = 'TOO';
searchString = findString.split('');
var searchPos = 0;

for (var i = 0; i < x.length; i++) {
  for (var j = 0; j < x.length; j++) {

    if (x[i][j] == searchString[0]) {

      ++searchPos;
      //Compare variable
      var outputString = x[i][j];

      var traversePos = j + 1;
      //traverse left to right
      while (traversePos < MAX_LENGTH && x[i][traversePos] == searchString[searchPos]) {
        console.log('lhs');
        outputString = outputString + x[i][traversePos];
        searchPos++;
        if (outputString == findString) {
          console.log('string "' + outputString + '" found start Position <' + i + ',' + j + '> end Position : <' + i + ',' + traversePos + '>');
        }
        traversePos++;
      }


      //Reinitialize the generating output string
      outputString = x[i][j];
      traversePos = i + 1;
      searchPos = 1;

      //Traverse top to bottom
      while (traversePos < MAX_LENGTH && x[traversePos][j] == searchString[searchPos]) {
        outputString = outputString + x[traversePos][j];
        searchPos++;
        if (outputString == findString) {
          console.log('string ' + outputString + 'found start Position <' + i + ',' + j + '> end Position : <' + traversePos + ',' + j + '>');
        }
        traversePos++;
      }
    }
  }
}