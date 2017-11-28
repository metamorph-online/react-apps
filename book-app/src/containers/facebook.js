import React, {Component} from 'react';
import Preloader from '../components/preloader';
import UserInfo from '../components/user_info';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fbLogIn, fbLoginStatusCheck, fbLogOut} from '../actions/index';


class Facebook extends Component {

	constructor(props){
		super(props);

		this.state = {
	        status: 'unknown',
	        loading: false,
	        data: {}
		}
	}

	
    doLogin() {
        this.setState({
            loading: true
        }); 

        this.props.fbLogIn();
    }

    doLogout() {

        this.setState({
            loading: true
        });

        this.props.fbLogOut();   
    }

    checkStatus() {
        this.setState({
            loading: true        
        }) 

        this.props.fbLoginStatusCheck();

    }

    render(){

    	
		
		const loading = this.state.loading ? <Preloader /> : null;
        const message = !_.isEmpty(this.props.login)
            ? (<div>

            	<UserInfo userinfo={this.props.login}></UserInfo>
                
              </div>)
            : (<button className="btn-facebook btn-lg btn" onClick={this.doLogin.bind(this)}><i className="fa fa-facebook fa-fw"></i>Login with Facebook</button>);
        return (
            <div>
                {message}
                {loading}
            </div>
        );
	}
};

function mapStateToProps(state){
    console.log(state);
	return{

		login: state.user.user
	}
}

export default connect(mapStateToProps, {fbLogIn, fbLoginStatusCheck, fbLogOut})(Facebook);