import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {

    super(props);

    this.state = { term: '' };
// Override the local method to the method of this instance or the class 
// otherwise need to call
// onInputChange need to be called as onChange={ (eventObject) => 
// this.onInputChange(eventObject.target.value) } />
// as this function is having a reference to this and setState which 
// is undefined for this method

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

// All DOM event handler onChange,onClick all come along with the even handler object
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // We need to go and fetch the weather Data
    // console.log('sdsdsjdsjdj');
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return(
      <form onSubmit = { this.onFormSubmit } className="input-group">
        <input
          placeholder="Get a 5 day forecast of your favorite City."
          className="form-control"
          value={ this.state.term }
          onChange={ this.onInputChange }/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
