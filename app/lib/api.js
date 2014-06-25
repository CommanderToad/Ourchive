//IIFE

console.log('loading');

//Include the XHR wrapper which makes requests painless.
var XHR = require('xhr');

//Create a new XHR object.
var xhr = new XHR();

var endpoint = 'http://ourchive.elasticbeanstalk.com/api/v1/';

//User API Methods
var user = {
	login: function(email, password, successCB, errorCB){
		request('post', 'user/login', {username: email, password: password}, successCB, errorCB);
	}
};

//Universal request function which 
function request(method, url, data, successCB, errorCB){
	if(method.toLowerCase() === 'post'){
		xhr.post(endpoint + url, createApiData(data), successCB, errorCB);
	}
	if(method.toLowerCase() === 'get'){
		xhr.get(endpoint + url, successCB, errorCB);
	}
};

//Used to inject information into the API requests:
function createApiData(data){
	data._apiRequest = true;
	data._token = 'this+would+be+the+token';
	return data;
};

//Create the exported object:
module.exports = {
	user: user,
	//Give the API raw access to the API request:
	request: request
};
