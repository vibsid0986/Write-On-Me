import React, { Component } from "react";
import "./PenPointerSelector.css";
import Slider from "@mui/material/Slider";

class PenPointerSelector extends Component {
  state = {
    PointerSize: this.props.selectedPointerSize,
  };
  render() {
    const penPointerSize = this.props.penPointerSize;
    const setSelectedPointerSize = this.props.setSelectedPointerSize;
    return (
      <div
        className="Pen-Pointer-Selector"
        onMouseEnter={() => {
          clearTimeout(this.props.timerId);
        }}
      >
        <Slider
          size="small"
          defaultValue={this.state.PointerSize}
          min={penPointerSize.min}
          onChange={(e) => {
            setSelectedPointerSize(e.target.value);
            this.props.setPenPointer(e.target.value);
          }}
          max={penPointerSize.max}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </div>
    );
  }
}

export default PenPointerSelector;
