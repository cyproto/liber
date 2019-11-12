import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";

class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      
      
    };
  }

  static get CARD_STYLE() {
    return {
      height: "300px",
      width: "400px",
      paddingTop: "80px",
      textAlign: "center",
      background: "#52C0F5",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return (
      <div style={MyCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel>
          <div style={MyCarousel.CARD_STYLE}>First Card</div>
          <div style={MyCarousel.CARD_STYLE}>Second Card</div>
          <div style={MyCarousel.CARD_STYLE}>Third Card</div>
          <div style={MyCarousel.CARD_STYLE}>Fourth Card</div>
          <div style={MyCarousel.CARD_STYLE}>Fifth Card</div>
        </ReactCardCarousel>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MyCarousel />, rootElement);
export default MyCarousel;