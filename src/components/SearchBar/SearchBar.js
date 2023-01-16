import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  storeSession() {
    window.sessionStorage.setItem("term", this.state.term);
  }

  search() {
    if (!window.sessionStorage.getItem("term")) {
      this.storeSession();
    }
    this.props.onSearch(this.state.term);
  }

  componentDidMount() {
    if (window.sessionStorage.getItem("term")) {
      this.props.onSearch(window.sessionStorage.getItem("term"));
    }
  }

  handleTermChange(e) {
    const term = e.target.value;
    this.setState({ term: term });
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange}
        />
        <button className="SearchButton" onClick={this.search}>
          SEARCH
        </button>
      </div>
    );
  }
}
