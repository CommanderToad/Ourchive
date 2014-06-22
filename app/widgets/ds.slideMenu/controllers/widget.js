var animateRight = Ti.UI.createAnimation({
	left : 270,
	curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration : 150
});

var animateReset = Ti.UI.createAnimation({
	left : 0,
	curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration : 150
});

var touchStartX = 0;
var touchRightStarted = false;
var touchLeftStarted = false;
var buttonPressed = false;
var hasSlided = false;
var direction = "reset";

$.movableview.addEventListener('touchstart', function(e) {
	touchStartX = e.x;
});

$.movableview.addEventListener('touchend', function(e) {
	if (buttonPressed) {
		buttonPressed = false;
		return;
	}
	if ($.movableview.left >= 180 && touchRightStarted) {
		direction = "right";
		$.leftButton.touchEnabled = false;
		$.movableview.animate(animateRight);
		hasSlided = true;
	}
	else if ($.movableview.left <= -180 && touchLeftStarted) {
		direction = "left";
	

		hasSlided = true;
	} else {
		direction = "reset";
		$.leftButton.touchEnabled = true;
		
		$.movableview.animate(animateReset);
		hasSlided = false;
	}
	Ti.App.fireEvent("sliderToggled", {
		hasSlided : hasSlided,
		direction : direction
	});
	touchRightStarted = false;
	touchLeftStarted = false;
});

$.movableview.addEventListener('touchmove', function(e) {
	var coords = $.movableview.convertPointToView({
		x : e.x,
		y : e.y
	}, $.containerview);
	var newLeft = coords.x - touchStartX;
	
	
	if ((touchRightStarted && newLeft <= 180 && newLeft >= 0) || 
		(touchLeftStarted && newLeft <= 0 && newLeft >= -180)) {
		//$.movableview.left = newLeft;
		//Animate to the next left value (looks pretty):
		$.movableview.animate({
        	left : newLeft,
	        duration : 7
	    });
	}
	else {
		// Sometimes newLeft goes beyond its bounds so the view gets stuck.
		// This is a hack to fix that.
		if ((touchRightStarted && newLeft < 0) || (touchLeftStarted && newLeft > 0)) {
			$.movableview.left = 0;
		}
		else if (touchRightStarted && newLeft > 180) {
			$.movableview.left = 180;
		}
		else if (touchLeftStarted && newLeft < -180) {
			$.movableview.left = -180;
		}
	}
	if (newLeft > 5 && !touchLeftStarted && !touchRightStarted) {
		touchRightStarted = true;
		Ti.App.fireEvent("sliderToggled", {
			hasSlided : false,
			direction : "right"
		});
	}
	else if (newLeft < -5 && !touchRightStarted && !touchLeftStarted) {
		
	}
});

$.leftButton.addEventListener('touchend', function(e) {
	if (!touchRightStarted && !touchLeftStarted) {
		buttonPressed = true;
		$.toggleLeftSlider();
	}
});


exports.toggleLeftSlider = function() {
	if (!hasSlided) {
		direction = "right";
		$.leftButton.touchEnabled = false;
		$.movableview.animate(animateRight);
		hasSlided = true;
	} else {
		direction = "reset";
		$.leftButton.touchEnabled = true;
		$.movableview.animate(animateReset);
		hasSlided = false;
	}
	Ti.App.fireEvent("sliderToggled", {
		hasSlided : hasSlided,
		direction : direction
	});
};



exports.handleRotation = function() {
/*
  	Add the orientation handler in the controller that loads this widget. Like this:
	Ti.Gesture.addEventListener('orientationchange', function() {
		$.ds.handleRotation();
	});
*/
	
};
