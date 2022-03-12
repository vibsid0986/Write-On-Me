import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css";

class Header extends Component {
  state = {
    selectedPenColor: this.props.stateComponents.PenFeatures.selectedPenColor,
  };

  setPenColor = (value) => {
    this.setState({ selectedPenColor: value });
  };
  render() {
    const onHover = this.props.stateComponents.onHover;

    return (
      <div className="header-container">
        <div className="header-options unselectable">
          <MenuIcon className="menu-button" fontSize="inherit" />
          <p className={`current-element-selected`}>
            {this.props.stateComponents.selectedComponent}
          </p>
          <p className={`current-element-hovered ${onHover ? "glow" : ""}`}>
            {onHover ? this.props.stateComponents.hoveredComponent : ""}
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
