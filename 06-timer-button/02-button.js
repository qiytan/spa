$(function(){
	var radStatus,
	txtTime=$('details input[type="number"]'),
	txtTile=$('details input[type="text"]'),
	txtCode=$('details textarea'),
	fmButton=$('details form');

	fmButton.submit(function(e){
		e.preventDefault();
		radStatus=$('details input[type="radio"]:checked');

		var btn=timerButton({
			'container':'div.main',
			'title':'同意',
			'tlength':9,
			'enable':'false'
		});

		btn.on('timer-button-click',new Function(txtCode.val()));
	})

	
});
