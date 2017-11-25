import React, {Component} from 'react';


export default class Facebook extends Component {

	constructor(props){
		super(props);

		this.state = {
	        status: 'unknown',
	        loading: false,
	        data: {}
		}
	}

	promises = {

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
	        return new Promise((resolve, reject) => {
	            FB.getLoginStatus((response) => {
	                response.status === 'connected' ? resolve(response) : reject(response);
	            });
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
	                response.authResponse ? resolve(response) : reject(response);
	            });
	        });
	    },
	    fetch: () => {
	        return new Promise((resolve, reject) => {
	            FB.api(
	                '/me', 
	                {fields: 'first_name, last_name, gender'},
	                response => response.error ? reject(response) : resolve(response)
	            );
	        });
	    }
	}

    doLogin() {
        this.setState({
            loading: true
        }); 

        this.promises.init()
                .then(
                    this.promises.checkLoginState,
                    error => { throw error; }
                )
                .then(
                    response => { this.setState({status: response.status}); },
                    this.promises.login
                )
                .then(
                    this.promises.fetch,
                    error => { throw error; }
                )
                .then(
                    response => { this.setState({loading: false, data: response, status: 'connected'}); },
                    error => { throw error; }
                )
                .catch((error) => { 
                    this.setState({loading: false, data: {}, status: 'unknown'});
                    console.warn(error); 
                });
    }

    doLogout() {
        this.setState({
            loading: true
        });

            this.promises.init()
                .then(
                    this.promises.checkLoginState,
                    error => { throw error; }
                )
                .then(
                    this.promises.logout,
                    error => { this.setState({data: {}, status: 'unknown'}); }
                )
                .then(
                    response => { this.setState({loading: false, data: {}, status: 'unknown'}); },
                    error => { throw error; }
                )
                .catch(error => { 
                    this.setState({loading: false, data: {}, status: 'unknown'});
                    console.warn(error); 
                });
    }

    checkStatus() {
        this.setState({
            loading: true        
        }) 

            this.promises.init()
                .then(
                    this.promises.checkLoginState,
                    error => { throw error; }
                )
                .then(
                    response => { this.setState({status: response.status}); },
                    error => { throw error; }
                )
                .then(
                    this.promises.fetchUser,
                    error => { throw error; }
                )
                .then(
                    response => { this.setState({loading: false, data: response, status: 'connected'}); },
                    error => { throw error; }
                )
                .catch((error) => { 
                    this.setState({loading: false, data: {}, status: 'unknown'});
                    console.warn(error); 
                });

    }

    render(){

    	console.log(this.state);
		
		const loading = this.state.loading ? <p>Please wait, profile is loading ...</p> : null;
        const message = this.state.status === 'connected'
            ? (<div>
                Hi {this.state.data.first_name}! 
                <button onClick={this.doLogout.bind(this)}>Logout</button>
              </div>)
            : (<button onClick={this.doLogin.bind(this)}>Login</button>);
        return (
            <div>
                {message}
                {loading}
            </div>
        );
	}
};