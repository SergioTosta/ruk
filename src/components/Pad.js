import React, { Component } from "react";
import Image from "react-bootstrap/lib/Image";

class Pad extends Component {
  play(id) {
    document.getElementById(id).play();
  }

  render() {
    return (
      <div onClick={() => this.play(this.props.item.key)}>
        <audio id={this.props.item.key}>
          <source src={"data:audio/mpeg;base64," + this.props.item.data.audio} />
        </audio>
        <Image src={this.props.item.data.image} rounded />
        <div>{this.props.item.data.title}</div>
      </div>
    );
  }
}
export default Pad;
