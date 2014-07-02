$.createAccountBtn.addEventListener('click', function(e){
	$.registerWin.close();
	var main=Alloy.createController('main').getView();
      main.open(); 
});
