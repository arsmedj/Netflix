import React, { Component } from "react";
import Item from "../Item/Item";

export default class TitleList extends Component {
  apiKey = "87dfa1c669eea853da609d4968d294be";

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: false,
      mounted: false,
    };
  }
  loadContent = async () => {
    const requestUrl =
      "https://api.themoviedb.org/3/" +
      this.props.url +
      "&api_key=" +
      this.apiKey;

    // if (this.props.url != undefined) {
    fetch(requestUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ data: data });
        console.log(data);
      })
      .catch((err) => {
        console.log("There has been an error" + err);
        this.setState({ error: true });
      });
    // }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url && nextProps.url !== "") {
      this.setState({ mounted: true, url: nextProps.url }, () => {
        this.loadContent();
      });
    }
  }

  componentDidMount() {
    if (this.props.url !== "") {
      this.loadContent();
      this.setState({ mounted: true });
    }
  }
  // const titles ->this.state.dataю results

  render() {
    let titles = "";
    if (this.state.data.results !== undefined) {
      titles = this.state.data.results.map((title, i) => {
        if (i < 5) {
          let name = "";
          let backDrop;
          if (!title.backdrop_path) {
            backDrop =
              "https://image.tmdb.org/t/p/original" + title.poster_path;
          } else {
            backDrop =
              "https://image.tmdb.org/t/p/original" + title.backdrop_path;
          }
          if (title.name == undefined) {
            name = title.original_title;
          } else {
            name = title.name;
          }
          return (
            <Item
              key={title.id}
              name={name}
              backDrop={backDrop}
              rating={title.vote_average}
              plot={title.overview}
            ></Item>
          );
        }
      });
    }
    return (
      <div ref="titlecategory" className="TitleList">
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">{titles}</div>
        </div>
      </div>
    );
  }
}
