import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={ () => this.props.selectBook(book) }
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() };
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up a props on the
// BookList Container
// Whenever selectBook is called, the result should be passed to all our Reducers
  // Here the the value to Key selectBook is the actual function we exported
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
// Promote BookList from a Component to a Container - it needs to know about
// this new dispatch method, selectBook. Make it available as a prop.
// connect takes a function and component and produces a Container
// A Container is a Component that is aware of the State that is contained by the redux
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
