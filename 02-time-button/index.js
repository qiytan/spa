var button = document.getElementById('timeButton');
var i = 9;
button.setAttribute('diszbled','disabled');
button.innerHTML='同意'+ i + 's';
var time = setInterval(function(){
  button.innerHTML = '同意'+ i-- +'s';
  if(i== -1){
    clearInterval(time);
    button.innerHTML='同意'；
    button.removeAttribute('diabled');
  }
},1000)；

