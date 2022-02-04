import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css";
import PenColorPalette from "../Panel/PenColorPalette";
import PenPointer from "../Panel/PenPointer";

class Header extends Component {
  state = {
    selectedPenColor: this.props.stateComponents.PenFeatures.selectedPenColor,
  };

  setPenColor = (value) => {
    this.setState({ selectedPenColor: value });
  };
  render() {
    const onHover = this.props.stateComponents.onHover;
    const penColors = this.props.penColors;
    const setSelectedPenColor = this.props.setSelectedPenColor;
    const selectedPenColor =
      this.props.stateComponents.PenFeatures.selectedPenColor;

    return (
      <div className="header-container">
        <div className="header-options">
          <MenuIcon className="menu-button" fontSize="inherit" />
          <p className={`current-element-selected  ${onHover ? "" : "glow"}`}>
            {onHover
              ? this.props.stateComponents.hoveredComponent
              : this.props.stateComponents.selectedComponent}
          </p>
          <div className="pen-color-pallete">
            <PenColorPalette
              penColors={penColors}
              setSelectedPenColor={setSelectedPenColor}
              setPenColor={this.setPenColor}
              selectedPenColor={
                this.props.stateComponents.PenFeatures.selectedPenColor
              }
            />
          </div>
          <div className="pen-pointer">
            <PenPointer
              selectedPenColor={this.state.selectedPenColor}
              selectedPointerSize={10.5}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
