import React, { Component } from "react";
import Pad from "./components/Pad.jsx";
import { Row, Col } from "react-bootstrap/dist/react-bootstrap";
import "./App.css";
import Data from "./components/Data";

const items = Data.data();

class App extends Component {
  render() {
    const cols = items.map(item => (
      <Col key={item.key}>
        <Pad item={item} />
      </Col>
    ));

    return (
      <div className="App">
        <Row>{cols}</Row>
      </div>
    );
  }
}

export default App;
