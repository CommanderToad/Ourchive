$.welcomeWin.open();

$.loginBtn.addEventListener('click', function(e){
	$.welcomeWin.close();
	var main=Alloy.createController('login').getView();
      main.open(); 
});
$.registerBtn.addEventListener('click', function(e){
	$.welcomeWin.close();
	var register=Alloy.createController('register').getView();
      register.open(); 
});
