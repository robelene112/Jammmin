import React from "react";
import "./PlayList.css";
import { TrackList } from "../TrackList/TrackList";

export class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} onChange={this.handleNameChange} />
        {/* <!-- Add a TrackList component --> */}
        <TrackList
          tracks={this.props.searchResults}
          playlistTracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={this.props.isRemoval}
        />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}