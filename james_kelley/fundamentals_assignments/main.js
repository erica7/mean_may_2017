		// Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]. Log each value.
			var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];

			for (var i = 0; i < x.length; i++){
				console.log(x[i]);

			}

			// Add a new value in the array x using a push method. New value you should add is 100

			x.push(100);
			console.log(x);

			// Add a new array ["hello", "world", "javascript is fun"] to variable x. Log x in the console and analyze how x looks

			x = ["hello", "world", "javascript is fun"]
			console.log(x)

			// Create a simple for loop that sums all the numbers between 1 and 500. Have console log the final sum.

			var sum = 0;

			for (var i = 1; i < 501; i++){

				sum = sum + i
			}
			console.log(sum)

			// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it

			var arr = [1, 5, 90, 25, -3, 0]
			var min = arr[0]

			for (var i = 1; i < arr.length; i++){
				if (arr[i] < min) {
					min = arr[i];
				}
			}
			console.log(min)

			// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all the values, and then print it.

			var arr = [1, 5, 90, 25, -3, 0]
			var sum = 0

			for (var i = 0; i < arr.length; i++){
				sum = sum + arr[i];
			}
			avg = sum / arr.length
			console.log("average is:" + avg)


			// Write a for-in loop that will navigate through the object below

			var new_ninja = {
				name: "James",
				profession: "Coder",
				favorite_language: "Javascript",
				dojo: "Dallas"
			};

			for (var key in new_ninja){

				console.log(key, new_ninja[key])
			
			}

			

