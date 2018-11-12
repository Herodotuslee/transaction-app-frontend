import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import './App.css';
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import TransactionsList from "./components/transactions/TransactionsList";
import { connect } from 'react-redux';


class App extends Component {
    componentDidMount(){
        if(window.location.pathname !== '/' && window.location.pathname !== '/register' && !this.props.token){
            console.log(this.props.token);
            // window.location.href = '/';
        }
    }

    renderErrors(){
        if(this.props.errors.length > 0){
            return this.props.errors.map((err)=><p style={{color: 'red'}}>{err}</p>)
        }
    }
  render() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route exact path='/transactions' component={TransactionsList}/>
            </Switch>
            {this.renderErrors()}
        </div>
    );
  }
}
const mapStateToProps = ({ userReducer, errors }) => ({token: userReducer.token, errors})
export default withRouter(connect(mapStateToProps)(withRouter(App)));
