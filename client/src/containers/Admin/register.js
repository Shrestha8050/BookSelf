import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUsers, userRegister } from '../../Action';

class register extends PureComponent {
  state = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    error: '',
  };

  UNSAFE_componentWillMount() {
    this.props.dispatch(getUsers());
  }
  handleInputName = (e) => {
    this.setState({
      name: e.target.value,
    });
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

  handleLastName = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.user.register === false) {
      this.setState({ error: 'Error Try again' });
    } else {
      this.setState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        error: '',
      });
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    this.setState({ error: ' ' });
    this.props.dispatch(
      userRegister(
        {
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          lastname: this.state.lastname,
        },
        this.props.user.users
      )
    );
  };

  showUsers = (user) =>
    user.users
      ? user.users.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.lastname}</td>
            <td>{item.email}</td>
          </tr>
        ))
      : null;
  render() {
    let user = this.props.user;
    return (
      <div className='rl_container'>
        <form onSubmit={this.submitForm}>
          <h2>Add user</h2>
          <div className='form_element'>
            <input
              type='text'
              placeholder='Enter name'
              value={this.state.name}
              onChange={this.handleInputName}
            />
          </div>
          <div className='form_element'>
            <input
              type='text'
              placeholder='Enter lastname'
              value={this.state.lastname}
              onChange={this.handleLastName}
            />
          </div>
          <div className='form_element'>
            <input
              type='email'
              placeholder='Enter Email'
              value={this.state.email}
              onChange={this.handleInputEmail}
            />
          </div>
          <div className='form_element'>
            <input
              type='password'
              placeholder='Enter Password'
              value={this.state.password}
              onChange={this.handleInputPassword}
            />
          </div>
          <button type='submit'>Add User</button>
          <div className='error'>{this.state.error}</div>
        </form>
        <div className='current_user'>
          <h4>Current Users:</h4>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{this.showUsers(user)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
export default connect(mapStateToProps)(register);
