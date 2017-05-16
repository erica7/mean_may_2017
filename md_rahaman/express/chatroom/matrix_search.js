
function twoDimMatrix(arr){
	// console.log(arr)
	var matrix=[[12,34,45,56],
			  [98,87,76,65],
			  [56,67,78,89],
			  [54,43,32,21]]

	// console.log(matrix)

	for(var i=0;i<matrix.length-1;i++){
		for(var j=0;j<matrix[i].length-1;j++){
			if(matrix[i][j] == arr[0][0] && matrix[i][j+1] == arr[0][1] && matrix[i+1][j] == arr[1][0] && matrix[i+1][j+1] == arr[1][1]){
				return true;
			}
		}
	}
	return false;
}

arr = [[78,89],
		[32,21]]	
console.log(twoDimMatrix(arr))