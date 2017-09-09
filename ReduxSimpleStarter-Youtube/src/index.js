import _ from 'lodash';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar.js'
import VideoList from './components/video_list.js'
import VideoDetail from './components/video_detail.js'
// Create a new Component . This Component should
// produce some HTML

const API_KEY = 'AIzaSyBRd2eQyS1Ic3ITHEKNBfeMB9l6Zj1GDSA';

class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        videos: [],
        selectedVideo: null
       };

       this.videoSeach('I am going to make it');
  }

  videoSeach(term) {

    YTSearch({key: API_KEY, term: term}, (data)=> {
      this.setState({
        videos: data,
        selectedVideo: data[0]
       });
      // If the callback function parameter is same as the state variable
      // this.setState({ videos })
      // :- this.setState({ videos: videos });
    });

  }

  render() {
    const videoSeach =  _.debounce((term) => { this.videoSeach(term) }, 600);
    return (
      <div>
        <SearchBar onSearchTermChange={ videoSeach } />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}/>
        </div>
    );
  }
}
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }


// Take this component's generated HTML and put it in the
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
