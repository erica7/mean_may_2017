
function twoDimMatrix(arr){
	// console.log(arr)
	var matrix=[[12,34,45,56],
			  [98,87,76,65],
			  [56,67,78,89],
			  [54,43,32,21]]

	// console.log(matrix)

	var height = matrix.length-arr.length+1
	var width = matrix[0].length-arr.length+1

	for(var i=0;i<height;i++){
		for(var j=0;j<width;j++){
			if(matrix[i][j] == arr[])
		}
	}

	return false;
}

arr = [[78,89],
		[32,21]]	
console.log(twoDimMatrix(arr))