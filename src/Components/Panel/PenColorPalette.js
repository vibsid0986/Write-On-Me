import React, { Component } from "react";
import "./PenColorPalette.css";

class PenColorPalette extends Component {
  state = { selectedColor: this.props.selectedPenColor };
  render() {
    const colors = this.props.penColors;
    const setSelectedPenColor = this.props.setSelectedPenColor;
    return (
      <div
        className="Pen-Color-Palette"
        onMouseEnter={() => {
          clearTimeout(this.props.timerId);
        }}
      >
        <span
          onClick={() => {
            this.setState({ selectedColor: colors[0] }, () => {
              setSelectedPenColor(this.state.selectedColor);
              this.props.setPenColor(this.state.selectedColor);
            });
          }}
          style={{ backgroundColor: colors[0] }}
        ></span>
        <span
          onClick={() => {
            this.setState({ selectedColor: colors[1] }, () => {
              setSelectedPenColor(this.state.selectedColor);
              this.props.setPenColor(this.state.selectedColor);
            });
          }}
          style={{ backgroundColor: colors[1] }}
        ></span>
        <span
          onClick={() => {
            this.setState({ selectedColor: colors[2] }, () => {
              setSelectedPenColor(this.state.selectedColor);
              this.props.setPenColor(this.state.selectedColor);
            });
          }}
          style={{ backgroundColor: colors[2] }}
        ></span>
        <span
          onClick={() => {
            this.setState({ selectedColor: colors[3] }, () => {
              setSelectedPenColor(this.state.selectedColor);
              this.props.setPenColor(this.state.selectedColor);
            });
          }}
          style={{ backgroundColor: colors[3] }}
        ></span>
        <span
          onClick={() => {
            this.setState({ selectedColor: colors[4] }, () => {
              setSelectedPenColor(this.state.selectedColor);
              this.props.setPenColor(this.state.selectedColor);
            });
          }}
          style={{ backgroundColor: colors[4] }}
        ></span>
      </div>
    );
  }
}

export default PenColorPalette;
