app.controller('MessagesController', function(messageFactory, commentFactory, $cookies){
  console.log('CS messages controller initialized');
  var self = this;
  self.messages = {};
  self.errors = [];
  self.newMessageId;
  self.index = function(){
    messageFactory.index(function(res){
      self.messages = res.data;
    })
  }
  self.create = function(newMessage){
    self.errors = [];
    newMessage.user = $cookies.get('userId');
    messageFactory.create(newMessage, function(res){
      self.newMessage = {}; //
      if (res.data.errors) {
        for(key in res.data.errors){
          var error = res.data.errors[key];
          self.errors.push(res.data.errors[key].message);
        }
      }
      self.index();
    })
  }
  self.createComment = function(messageId, newComment){          ///////////////////////
    self.errors = [];
    newComment.user = $cookies.get('userId');  // _
    newComment.message = messageId;  // _
    commentFactory.create(newComment, function(res){
      self.newComment = {}; //
      if (res.data.errors) {
        for(key in res.data.errors){
          var error = res.data.errors[key];
          self.errors.push(res.data.errors[key].message);
        }
      }
      self.index();
    })
  }
})
