import React, { Component } from "react";
import Image from "react-bootstrap/lib/Image";

const imageCSS = {
  width: "100px",
  height: "100px"
};

class Pad extends Component {
  play(id) {
    document.getElementById(id).play();
  }
  render() {
    return (
      <div className="mt-4">
        <audio id={this.props.item.key}>
          <source type="audio/mpeg" src={this.props.item.data.audio} />
        </audio>
        <Image
          src={this.props.item.data.image}
          rounded
          onClick={() => this.play(this.props.item.key)}
          style={imageCSS}
        />
        <div>{this.props.item.data.title}</div>
      </div>
    );
  }
}
export default Pad;
