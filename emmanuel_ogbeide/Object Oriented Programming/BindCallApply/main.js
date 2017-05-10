$(function(){
  var customObject = {
    name:'California, Eureka',
    onClick:function(param){
      console.log("I've been clicked");
      console.log(param, "I've been passed by bind");
      console.log(this.name);
    }
  }
  var newObject = {
  name:"West Virginia,  Montani semper liberi"
}
  $('button').click(customObject.onClick.bind(customObject,"Bind this argument!"));
})
