import React, { Component, Fragment } from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Menu/Menu";
import Hero from "./components/Hero/Hero";
import TitleList from "./components/TitleList/TitleList";

class App extends Component {
  apiKey = "87dfa1c669eea853da609d4968d294be";

  state = {
    searchTerm: "",
    searchUrl: "",
  };
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };
  handleKeyUp = (e) => {
    if (e.key === "Enter" && this.state.searchTerm !== "") {
      var searchUrl =
        "search/multi?query=" +
        this.state.searchTerm +
        "&api_key" +
        this.apiKey;
      this.setState({ searchUrl: searchUrl });
    }
  };
  render() {
    return (
      <Fragment>
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            <input
              onKeyUp={this.hadleKeyUp}
              onChange={this.handleChange}
              type="search"
              placeholder="Search for a title..."
              value={this.state.searchTerm}
            ></input>
          </div>
        </header>
        <Hero />
        <TitleList title="Search Results" url={this.state.searchUrl} />
        <TitleList
          title="Top TV picks for Jack"
          url="discover/tv?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Trending now"
          url="discover/movie?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Most watched in Horror"
          url="genre/27/movies?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Sci-Fi greats"
          url="genre/878/movies?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Comedy magic"
          url="genre/35/movies?sort_by=popularity.desc&page=1"
        />
      </Fragment>
    );
  }
}

export default App;
