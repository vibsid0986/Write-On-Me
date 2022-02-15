import React, { Component } from "react";
import "./PenPointer.css";
class PenPointer extends Component {
  render() {
    return (
      <div className="Pen-Container">
        <span
          style={{
            backgroundColor: this.props.selectedPenColor,
            width: (this.props.selectedPointerSize / 2 + 0.5) * 4,
            height: (this.props.selectedPointerSize / 2 + 0.5) * 4,
          }}
        ></span>
      </div>
    );
  }
}

export default PenPointer;
