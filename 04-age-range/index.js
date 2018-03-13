var range=document.getElementById('range');
var pAge=document.getElementById('p-age');
pAge.innerHTML=range.value;
range.onchange=function(){
  pAge.innerHTML=range.value;
};
