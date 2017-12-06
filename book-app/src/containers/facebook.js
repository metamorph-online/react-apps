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
	        loading: false
		}
	}

	componentWillUpdate(nextProps, nextState){

        //if login props is not empty we need to turn loading off
        if(!_.isEmpty(nextProps.login) && nextState.loading == true){
            this.setState({ loading: false})
        }
    }

    //calls fbLogIn action
    doLogin() {
        this.setState({
            loading: true
        }); 

        this.props.fbLogIn();

       
    }

    //calls doLogout action
    doLogout() {

        this.setState({
            loading: true
        });

        this.props.fbLogOut();   
    }

    //calls fbLoginStatusCheck
    checkStatus() {
        this.props.fbLogIn();
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