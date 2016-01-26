var arr1 = [1, 5, 10, 20, 40, 80]
var arr2 = [6, 7, 20, 80, 100]
var arr3 = [3, 4, 15, 20, 30, 70, 80, 120];
var commonElements = [];

for (var i = 0; i < arr1.length; i++) {
   for (var j = 0; j < arr2.length; j++) {
   	      if(arr1[i] == arr2[j]){
       	   commonElements.push(arr1[i]);
       }
   };
};


/**
With in 7 iterations it found the solution
**/
commonElements = [];
function findCommonElements(arr1 , arr2){
	var len1 = arr1.length;
	var len2 = arr2.length;
	
	var i=0;j=0;
	
	while(i < len1 && j< len2){
		if(arr1[i] == arr2[j]){
			commonElements.push(arr1[i]);
			i++; 
			j++;
		}else if(arr1[i] < arr2[j]){
			i++;
		}else{
			j++;
		}
	}
}

findCommonElements(arr1 , arr2);
console.log('common elements' , commonElements);

/**
After implement this code i have tested how much loop it runs
its runs 239 loops 
I have write to optimal way to reduce the loops running
**/
count =0;
commonElements = [];
for (var i = 0; i < arr1.length; i++) {
   for (var j = 0; j < arr2.length; j++) {
   	  for(k=0;k< arr3.length;k++){
   	  	 console.log(count++);
   	  if(arr1[i] == arr2[j] && arr2[j] == arr3[k]){
       	 commonElements.push(arr1[i]);
       }
   	  }
   };
};



/**http://www.geeksforgeeks.org/find-common-elements-three-sorted-arrays/
In geeks for geeks site there is optimal solution for this problem
This algorithm solves the problem in 7 loops
**/

commonElements = [];
function findCommonElements(arr1 , arr2, arr3){
	var len1 = arr1.length;
	var len2 = arr2.length;
	var len3 = arr3.length;
	var i=0,j=0,k=0;
	while(i < len1 && j < len2 && k < len3){
   	   console.log(count++);
   	   if(arr1[i] == arr2[j] && arr2[j] == arr3[k]){
       	 commonElements.push(arr1[i]);
       	 i++;j++;k++;
       } else if(arr1[i] < arr2[j]){
       		i++;
       }else if(arr2[j] < arr3[k]){
       	 j++;
       }else{
       	k++;
       }
	}
}

findCommonElements(arr1, arr2, arr3);

console.log('common elements' , commonElements);

