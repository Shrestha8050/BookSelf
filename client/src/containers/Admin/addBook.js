import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook, clearNewBook } from '../../Action';
import { Link } from 'react-router-dom';

class add extends Component {
  state = {
    formdata: {
      name: '',
      author: '',
      review: '',
      pages: '',
      rating: '1',
      price: '',
    },
  };

  handleInput = (e, name) => {
    const formdata = {
      ...this.state.formdata,
    };
    formdata[name] = e.target.value;
    this.setState({
      formdata: formdata,
    });
  };
  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(
      addBook({ ...this.state.formdata, ownerId: this.props.user.login.id })
    );
  };
  showNewBook = (book) =>
    book.post ? (
      <div className='conf_link'>
        Cool <Link to={`/books/${book.bookId}`}>Go to view Book</Link>
      </div>
    ) : null;

  UNSAFE_componentWillMount() {
    this.props.dispatch(clearNewBook());
  }
  render() {
    return (
      <div className='rl_container article'>
        <form onSubmit={this.submitForm}>
          <h2>Add a review</h2>
          <div className='form_element'>
            <input
              type='text'
              placeholder='Enter name'
              value={this.state.formdata.name}
              onChange={(e) => this.handleInput(e, 'name')}
            />
          </div>
          <div className='form_element'>
            <input
              type='text'
              placeholder='Enter author'
              value={this.state.formdata.author}
              onChange={(e) => this.handleInput(e, 'author')}
            />
          </div>
          <textarea
            name=''
            value={this.state.formdata.review}
            id=''
            cols='30'
            rows='10'
            onChange={(e) => this.handleInput(e, 'review')}
          ></textarea>
          <div className='form_element'>
            <input
              type='number'
              placeholder='Enter pages in number'
              value={this.state.formdata.pages}
              onChange={(e) => this.handleInput(e, 'pages')}
            />
          </div>
          <div className='form_element'>
            <select
              name=''
              value={this.state.formdata.rating}
              onChange={(e) => this.handleInput(e, 'rating')}
              id=''
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
          <div className='form_element'>
            <input
              type='number'
              placeholder='Enter price in number'
              value={this.state.formdata.price}
              onChange={(e) => this.handleInput(e, 'price')}
            />
          </div>
          <button type='submit'>Add Review</button>
          {this.props.books.newbook
            ? this.showNewBook(this.props.books.newbook)
            : null}
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

export default connect(mapStateToProps)(add);
