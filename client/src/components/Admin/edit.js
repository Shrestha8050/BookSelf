import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getBook, clearBook, updateBook, deleteBook } from '../../Action';
import { Link } from 'react-router-dom';

class Edit extends PureComponent {
  state = {
    formdata: {
      _id: this.props.match.params.id,
      name: '',
      author: '',
      review: '',
      pages: '',
      rating: '1',
      price: '',
    },
  };

  deletePost = () => {
    this.props.dispatch(deleteBook(this.props.match.params.id));
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
    this.props.dispatch(updateBook(this.state.formdata));
  };

  UNSAFE_componentWillMount() {
    this.props.dispatch(getBook(this.props.match.params.id));
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    let book = nextProps.books.book;

    if (book) {
      this.setState({
        formdata: {
          _id: book._id,
          name: book.name,
          author: book.author,
          review: book.review,
          pages: book.pages,
          rating: book.rating,
          price: book.price,
        },
      });
    }
  }

  UNSAFE_componentWillUnmount() {
    this.props.dispatch(clearBook());
  }
  redirectUser = () => {
    setTimeout(() => {
      this.props.history.push('/user/user-reviews');
    }, 1000);
  };
  render() {
    console.log(this.props);
    let books = this.props.books;
    return (
      <div className='rl_container article'>
        {books.updateBook ? (
          <div className='edit_confirm'>
            post update ,
            <Link to={`/books/${books.book._id}`}>CliCk to see new Post</Link>
          </div>
        ) : null}
        {books.postDeleted ? (
          <div className='red_tag'>
            Post Deleted
            {this.redirectUser()}
          </div>
        ) : null}
        <form onSubmit={this.submitForm}>
          <h2>Edit a review</h2>
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
          <button type='submit'>Edit Review</button>
          <div className='delete_post'>
            <div className='button' onClick={this.deletePost}>
              Delete Review
            </div>
          </div>
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

export default connect(mapStateToProps)(Edit);
