import React, { Component } from 'react';
import Fontawesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import Nav from './sidenav/sidenav';
class header extends Component {
  state = {
    showNav: false,
  };
  onHideNav = () => {
    this.setState({
      showNav: false,
    });
  };
  render() {
    return (
      <header>
        <div className='open_nav'>
          <Fontawesome
            name='bars'
            style={{
              color: '#fff',
              padding: '10px',
              curser: 'pointer',
            }}
            onClick={() => {
              this.setState({ showNav: true });
            }}
          />
        </div>
        <Nav showNav={this.state.showNav} onHideNav={this.onHideNav} />
        <Link to='/' className='logo'>
          The Book Shelf
        </Link>
      </header>
    );
  }
}

export default header;
