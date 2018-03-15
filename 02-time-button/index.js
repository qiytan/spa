var button = document.getElementById('timeButton');
var i = 9;
var time;
button.innerHTML= '还剩'+ i + 's';
button.setAttribute('disabled','disabled');
time=function(){
  setInterval(function(){
    i--;
    button.innerHTML = '还剩'+ i + 's';
    if(i == 0)
    {
      clearInterval(time);
      button.innerHTML = '点击';
    }
  },1000);
};
