// let promiseToCleanTheRoom = new Promise(function(resolve,reject){
// 	let isClean = true;

// 	if(isClean){
// 		resolve('clean');
// 	}
// 	else{
// 		reject('not clean')
// 	}
// })

// promiseToCleanTheRoom.then(function(fromResolve){
// 	console.log('the room is ' + fromResolve);

// }).catch(function(fromReject){
// 	console.log('the room is ' + fromReject)
// })


///////////////Promise dependancies/////////////////

// let cleanRoom = function(){
// 	return new Promise(function(resolve,reject){
// 		resolve('cleaned the room ')
// 	})
// }

// let removeGarbage = function(message){
// 	return new Promise(function(resolve,reject){
// 		resolve(message + 'remove garbage')
// 	})
// }

// let winIcecream = function(message){
// 	return new Promise(function(resolve,reject){
// 		resolve(message + 'won icecream')
// 	})
// }

// cleanRoom().then(function(result){
// 	return removeGarbage(result);
// }).then(function(result){
// 	return winIcecream(result);
// }).then(function(result){
// 	console.log('finished ' + result)
// })



///////////////Another way to chain the Promise methods/////////////////
////////////////////then function will not fire untill ALL functions have finished/////////////////
///////////////////Notice the all method//////////////////////////////

// let cleanRoom = function(){
// 	return new Promise(function(resolve,reject){
// 		resolve('cleaned the room ')
// 	})
// }

// let removeGarbage = function(message){
// 	return new Promise(function(resolve,reject){
// 		resolve(message + 'remove garbage')
// 	})
// }

// let winIcecream = function(message){
// 	return new Promise(function(resolve,reject){
// 		resolve(message + 'won icecream')
// 	})
// }

// Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
// 	console.log('all finsished')
// })

/////////////////////then function will fire after only ONE is finished///////////////////////
/////////////////////Using the race method///////////////////////////////////////
// let cleanRoom = function(){
// 	return new Promise(function(resolve,reject){
// 		resolve('cleaned the room ')
// 	})
// }

// let removeGarbage = function(message){
// 	return new Promise(function(resolve,reject){
// 		resolve(message + 'remove garbage')
// 	})
// }

// let winIcecream = function(message){
// 	return new Promise(function(resolve,reject){
// 		resolve(message + 'won icecream')
// 	})
// }

// Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
// 	console.log('one of them finsished')
// })


var beginDonutTransaction = new Promise(
  function(resolve,reject){
  	console.log('ordered doughnut')
    var x = setTimeout(function () {
      console.log('donut is on counter');
      resolve();
    }, 1000);
  }
);
beginDonutTransaction
.then(function(){
  //this is the resolve
  console.log('pay');
  console.log('walk out door');
})
.catch(function(){
  //this is the reject
  console.log("give me my donut!");
});
