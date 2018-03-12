window.onload = function(){
  var rectangle__width = document.getElementById('rectangle__width');
  var rectangle__calc = document.getElementById('rectangle__calc');
  rectangle__width.focus();
  rectangle__calc.onclick=function(){
    var width = document.getElementById('rectangle__width').value;
    var height = document.getElementById('rectangle__height').value;
    document.getElementById('rectangle__perimeter').value = 2*parseFloat(width)+parseFloat(height)*2;
    document.getElementById('rectangle__area').value = width*height;
  };
  
};

