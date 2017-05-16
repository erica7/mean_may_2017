// our test object
$(function(){
  // our test object
var customObject = {
  name:'California, Eureka',
  onClick:function(myParam){
    console.log("I've been clicked");
    console.log(myParam, "I've been passed by bind");
    console.log(this.name);
  }
}
// our behavior on click.



  var newObject = {
  name:"West Virginia,  Montani semper liberi"
}

// our behavior on click.
$('button').click(customObject.onClick.bind(customObject,"Bind this argument!"));
//$('button').click(customObject.onClick.bind(newObject));
//$('button').click(customObject.onClick.bind(customObject));
//$('button').click(customObject.onClick);


// modify the button method to this:
//$('button').click(customObject.onClick.bind(newObject));

})
