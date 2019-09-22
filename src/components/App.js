import React from "react";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onTextSubmit("ReactJS");
  }

  onSelectVideo = video => {
    this.setState({ selectedVideo: video });
  };

  onTextSubmit = async text => {
    const response = await youtube.get("/search", {
      params: {
        q: text
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTextSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onSelectVideo={this.onSelectVideo}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
