import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../Action';
import BookItem from '../widgetUI/bookItem';
class home_container extends Component {
  UNSAFE_componentWillMount() {
    this.props.dispatch(getBooks(5, 0, 'asc'));
  }

  renderItems = (books) => {
    return books.list
      ? books.list.map((item, i) => <BookItem {...item} key={i} />)
      : null;
  };
  loadmore = () => {
    let count = this.props.books.list.length;
    this.props.dispatch(getBooks(3, count, 'asc', this.props.books.list));
  };
  render() {
    return (
      <div>
        {this.renderItems(this.props.books)}
        <div className='loadmore' onClick={this.loadmore}>
          LoadMore
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}
export default connect(mapStateToProps)(home_container);
