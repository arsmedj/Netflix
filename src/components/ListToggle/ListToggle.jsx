import React from "react";

export default class ListToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }
  handleClick = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <div
        className="ListToggle"
        data-toggled={this.state.toggle}
        onClick={this.handleClick}
      >
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    );
  }
}
