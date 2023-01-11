import React from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { PlayList } from "../PlayList/PlayList";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Love Sosa",
          artist: "Chief Keef",
          album: "Finally Rich",
          id: 1,
        },
        { name: "Poker Face", artist: "Lady Gaga", album: "troelalala", id: 2 },
        {
          name: "Applause",
          artist: "Lady Gaga",
          album: "Finally bitch",
          id: 3,
        },
      ],
      playlistName: "thenameoftheplaylist",
      playlistTracks: [
        {
          name: "Love Sosa",
          artist: "Chief Keef",
          album: "Finally Rich",
          id: 1,
        },
        { name: "Poker Face", artist: "Lady Gaga", album: "troelalala", id: 2 },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.includes(track.id)) {
      return;
    }
    this.state.playlistTracks.push(track);
  }

  removeTrack(track) {
    this.state.playlistTracks.filter((eachTrack) => {
      return eachTrack === track;
    });
  }

  updatePlaylistName(name) {
    this.state.playlistName = name;
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <PlayList
              searchResults={this.state.searchResults}
              playlistName={this.playlistName}
              playlistTracks={this.playlistTracks}
              onRemove={this.removeTrack}
              isRemoval={true}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
