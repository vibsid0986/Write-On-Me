import React, { Component } from "react";
import Header from "./Header/Header";
import ComponentPanel from "./Panel/ComponentPanel";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      onHover: false,
      hoveredComponent: "Select",
      selectedComponent: "Select",
      PenFeatures: {
        selectedPenColor: "black",
        selectedPointerSize: 2,
      },
    };
  }

  setSelectedPenColor = (value) => {
    this.setState(
      {
        PenFeatures: {
          ...this.state.PenFeatures,
          selectedPenColor: value,
        },
      },
      () => {
        console.log(this.state.PenFeatures.selectedPenColor);
      }
    );
  };
  setSelectedPointerSize = (value) => {
    this.setState({
      PenFeatures: {
        ...this.state.PenFeatures,
        selectedPointerSize: value,
      },
    });
  };

  setHoveredHeader = (header_value) => {
    this.setState({ hoveredComponent: header_value });
  };
  setSelectedHeader = (component_selected) => {
    this.setState({ selectedComponent: component_selected });
  };
  setOnHover = (val) => {
    this.setState({ onHover: val });
  };

  render() {
    const componentNames = ["Select", "Pen", "Text"];
    const colors = ["red", "green", "gold", "blue", "black"];
    const penPointerSize = {
      min: 0,
      max: 10,
    };
    return (
      <div className="AppComponent">
        <Header
          penColors={colors}
          stateComponents={this.state}
          setSelectedPenColor={this.setSelectedPenColor}
        />
        <ComponentPanel
          componentNames={componentNames}
          onHover={this.state.onHover}
          setOnHover={this.setOnHover}
          setHoveredHeader={this.setHoveredHeader}
          setSelectedHeader={this.setSelectedHeader}
          penColors={colors}
          setSelectedPenColor={this.setSelectedPenColor}
          penPointerSize={penPointerSize}
          selectedPointerSize={this.state.PenFeatures.selectedPointerSize}
          setSelectedPointerSize={this.setSelectedPointerSize}
          selectedPenColor={this.state.PenFeatures.selectedPenColor}
        />
      </div>
    );
  }
}

export default App;
