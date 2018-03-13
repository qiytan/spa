/*var password=document.getElementById('passWord');
var pw2=document.getElementById('pw2');

pw2.innerText=password.value;*/ 
var pw2=document.getElementById('pw2');

var img=document.getElementById('img');

img.onmouseover=function(){
  var password=document.getElementById('passWord');
  img.src='eye.png';
  pw2.style.display='inline';
  pw2.value=password.value;
};

img.onmouseout=function(){
  img.src='eye-close.png';
  pw2.style.display='none';
};
