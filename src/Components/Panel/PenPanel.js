import React, { Component } from "react";
import PenColorPalette from "./PenColorPalette";
import PenPointerSelector from "./PenPointerSelector";
import CreateIcon from "@material-ui/icons/Create";
import PenPointer from "./PenPointer";
import "./PenPanel.css";

class PenPanel extends Component {
  state = {
    selectedPenColor: this.props.selectedPenColor,
    selectedPointerSize: this.props.selectedPointerSize,
  };

  setPenColor = (value) => {
    this.setState({ selectedPenColor: value });
  };

  setPenPointer = (value) => {
    this.setState({ selectedPointerSize: value });
  };

  render() {
    const setSelectedPenColor = this.props.setSelectedPenColor;
    const penPointerSize = this.props.penPointerSize;
    const setSelectedPointerSize = this.props.setSelectedPointerSize;
    const selectedPointerSize = this.props.selectedPointerSize;
    const selectedPenColor = this.props.selectedPenColor;
    if (this.props.enablePenProps) {
      return (
        <div>
          <div className="pen-component-container">
            <PenColorPalette
              penColors={this.props.penColors}
              timerId={this.props.timerId}
              setSelectedPenColor={setSelectedPenColor}
              setPenColor={this.setPenColor}
              selectedPenColor={selectedPenColor}
            />
            <CreateIcon fontSize="large" />
            <PenPointer
              selectedPenColor={this.state.selectedPenColor}
              selectedPointerSize={this.state.selectedPointerSize}
            />
            <PenPointerSelector
              timerId={this.props.timerId}
              penPointerSize={penPointerSize}
              setSelectedPointerSize={setSelectedPointerSize}
              setPenPointer={this.setPenPointer}
              selectedPointerSize={selectedPointerSize}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <CreateIcon fontSize="large" />
        </div>
      );
    }
  }
}

export default PenPanel;
