$(function(){
  var btnAdd=$('#add-password'),
  getAdd=$('#get-password'),
  pwdBox=[];

  btnAdd.click(function(){
    var pwd=new PasswordBox({'container':'div.main'});
    pwdBox.push(pwd);
    getAdd.removeAttr('disabled');
  });

  getAdd.click(function(){
    pwdBox.forEach(function(pwd){
      alert(pwd.getPwd());
    });
  });
});
