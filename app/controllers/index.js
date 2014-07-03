$.welcomeWin.open();

$.loginBtn.addEventListener('click', function(e){
	$.welcomeWin.close();
	var login = Alloy.createController('login').getView();
      login.open(); 
});
$.registerBtn.addEventListener('click', function(e){
	$.welcomeWin.close();
	var register=Alloy.createController('register').getView();
      register.open(); 
});
