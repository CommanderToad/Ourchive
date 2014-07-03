$.loginBtn.addEventListener('click', function(e){
	$.loginWin.close();
	var main=Alloy.createController('main').getView();
      main.open(); 
});
$.registerBtn.addEventListener('click', function(e){
	$.loginWin.close();
	var register=Alloy.createController('register').getView();
      register.open(); 
});
