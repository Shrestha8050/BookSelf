import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../Action';
class login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    success: '',
  };

  handleInputEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleInputPassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.user.login.isAuth) {
      this.props.history.push('/user');
    }
  }
  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(loginUser(this.state));
  };

  render() {
    let user = this.props.user;
    return (
      <div className='rl_container'>
        <form action='' onSubmit={this.submitForm}>
          <h2>Login In </h2>
          <div className='form_element'>
            <input
              type='email'
              value={this.state.email}
              placeholder='Enter your Email'
              onChange={this.handleInputEmail}
            />
          </div>
          <div className='form_element'>
            <input
              type='password'
              value={this.state.password}
              placeholder='Enter your Password'
              onChange={this.handleInputPassword}
            />
          </div>
          <button type='submit'>Log In</button>
          <div className='error'>
            {user.login ? <div>{user.login.message}</div> : null}
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
export default connect(mapStateToProps)(login);
