import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />;
// };

// const Component = React.Component;

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: 'Hitti'};
  }
  // render() {
  //   return <input onChange={this.handleInputChange} />;
  // }
  //
  // handleInputChange(eventObject) {
  //   console.log(eventObject.target.value);
  // }

  // render() {
  //   return <input onChange={(eventObject)=>console.log(eventObject.target.value)} />;
  // }

  render() {
    return (
      <div className="search-bar">
      <input
       value={this.state.term}
       onChange={ (eventObject) => this.onInputChange(eventObject.target.value) } />
      // Value of the State is : {this.state.term}
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
