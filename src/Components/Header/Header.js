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
        <div className="header-options">
          <MenuIcon className="menu-button" fontSize="inherit" />
          <p className={`current-element-selected  ${onHover ? "" : "glow"}`}>
            {onHover
              ? this.props.stateComponents.hoveredComponent
              : this.props.stateComponents.selectedComponent}
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
