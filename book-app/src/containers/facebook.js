import React, {Component} from 'react';
import Preloader from '../components/preloader';
import UserInfo from '../components/user_info';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fbLogIn, fbLoginStatusCheck, fbLogOut} from '../actions/index';
import {FB_promises} from '../components/fb_connect_api';


class Facebook extends Component {

	constructor(props){
		super(props);
	}

    //calls fbLogIn action
    doLogin() {

        let response =  FB_promises.init()
        .then(
            FB_promises.login,
            error => { throw error; },
            console.log('login')
        )
        .then(
            response = FB_promises.fetch,
            error => { throw error; },
            console.log('fetch user')
        )
        .catch((error) => { 
            console.warn(error); 
        });

        this.props.fbLogIn(response);
       
    }

    //calls doLogout action
    doLogout() {

        FB_promises.init()

            .then(
                FB_promises.logout,
                error => { throw error; }
            )
            
            .catch(error => { 
                console.warn(error); 
        });

        console.log(this.props.login);

        this.props.fbLogOut();   
    }

    //calls fbLoginStatusCheck
    checkStatus() {

        let response = '';

        FB_promises.init()
            .then(
                FB_promises.checkLoginState,
                error => { throw error }
            )        
            .then(
                response = FB_promises.fetch,
                error => { throw error; }
            )        
            .catch((error) => { 
                console.warn(error); 
        });

        this.props.fbLoginStatusCheck(response);
    }

    render(){    			

        const message = !_.isEmpty(this.props.login)
            ? (<div>

            	<UserInfo userLogout={this.doLogout.bind(this)} userinfo={this.props.login}></UserInfo>
                
              </div>)
            : (<button className="btn-facebook btn-lg btn" onClick={this.doLogin.bind(this)}><i className="fa fa-facebook fa-fw"></i>Login with Facebook</button>);
        return (
            <div>
                {message}
            </div>
        );
	}
};

function mapStateToProps(state){

	return{

		login: state.user.user
	}
}

export default connect(mapStateToProps, {fbLogIn, fbLoginStatusCheck, fbLogOut})(Facebook);