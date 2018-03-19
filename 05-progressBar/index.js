
var timer=0;
var progress=document.getElementById('progress');
var begin=document.getElementById('begin');
begin.onclick=function(){
  
  timer=setInterval(function(){
    progress.value++;
    if(progress.value>100){
      clearInterval(timer);
    }
  },100);

};

var pause=document.getElementById('pause');
pause.onclick=function(){
  clearInterval(timer);
};

var reset=document.getElementById('reset');
reset.onclick=function(){
  progress.value=0;
};
