var PasswordBox=function(config){
  var pwd=$('<input type="password">'),
  pwdText=$('<input type="text">'),
  img=$('<div></div>'),
  div=$('<div class="passWord">密码:</div>');

  div.append(pwd);
  div.append(img);
  div.append(pwdText);
  $(config.container).append(div);

  pwd.on('input',function(){
    pwdText.val(pwd.val());
  });

  img.mouseover(function(){
    pwdText.css('z-index',10);
  });

  img.mouseout(function(){
    pwdText.css('z-index',-10);
  });

  this.getPwd=function(){
    return pwdText.val();
  };
}