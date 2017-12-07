import React from 'react';


//promises object for login/logout/fetch user info
export const FB_promises = {

	    init: () => {
	        return new Promise((resolve, reject) => {
	            if (typeof FB !== 'undefined') {
	                resolve();
	            } else {
	                window.fbAsyncInit = () => {
	                    FB.init({
	                        appId      : '153646268585020',
	                        cookie     : true, 
	                        xfbml      : true,  
	                        version    : 'v2.5'
	                    });
	                    resolve();
	                };
	                (function(d, s, id) {
	                    var js, fjs = d.getElementsByTagName(s)[0];
	                    if (d.getElementById(id)) return;
	                    js = d.createElement(s); js.id = id;
	                    js.src = "//connect.facebook.net/en_US/sdk.js";
	                    fjs.parentNode.insertBefore(js, fjs);
	                }(document, 'script', 'facebook-jssdk'));
	            }
	        });
	    },
	    checkLoginState: () => {

	            FB.getLoginStatus((response) => {
	                response.status === 'connected' ? resolve(response) : reject(response);
	            });
	    },
	    login: () => {
	        return new Promise((resolve, reject) => {
	            FB.login((response) => {
	                response.status === 'connected' ? resolve(response) : reject(response);
	            });
	        });
	    },
	    logout: () => {
	        return new Promise((resolve, reject) => {
	            FB.logout((response) => {
	            	console.log(response);
	                response.status == 'unknown' ? resolve(response) : reject(response);
	            });
	        });
	    },
	    fetch: () => {
	        return new Promise((resolve, reject) => {
	            FB.api(
	                '/me',
	                {fields: 'first_name, last_name, gender, picture.type(square).width(100).height(100)'},
	                response => response.error ? reject(response) : resolve(response)
	            );
	        });
	    }
	}