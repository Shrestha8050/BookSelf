import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUserPosts } from '../../Action';
import { Link } from 'react-router-dom';
// import moment from 'moment';
class userPost extends PureComponent {
  UNSAFE_componentWillMount() {
    this.props.dispatch(getUserPosts(this.props.user.login.id));
  }
  showUserPosts = (user) =>
    user.userPosts
      ? user.userPosts.map((item, i) => (
          <tr key={i}>
            <td>
              <Link to={`/user/edit-post/${item._id}`}>{item.name}</Link>
            </td>
            <td>{item.author}</td>
            <td>{item.date}</td>
          </tr>
        ))
      : null;
  render() {
    console.log(this.props);
    let user = this.props.user;
    return (
      <div className='user_posts'>
        <div>Your Reviews</div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{this.showUserPosts(user)}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.user,
  };
}
export default connect(mapStateToProps)(userPost);
