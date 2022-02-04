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
      EraserFeatures: {
        EraserSymbol: "M",
        EraserSize: "1.5rem",
        DeleteAll: false,
      },
    };
  }

  setEraserProps = (size, symbol) => {
    this.setState(
      {
        EraserFeatures: {
          ...this.state.EraserFeatures,
          EraserSize: size,
          EraserSymbol: symbol,
        },
      },
      () => {
        console.log(
          "Eraser Size Selected--> ",
          this.state.EraserFeatures.EraserSize,
          "Eraser Symbol Selected--> ",
          this.state.EraserFeatures.EraserSymbol
        );
      }
    );
  };

  setEraseAll = () => {
    this.setState(
      {
        EraserFeatures: {
          ...this.state.EraserFeatures,
          DeleteAll: true,
        },
      },
      () => {
        console.log("Must Perform Something to delete everything");
      }
    );
  };

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
    const componentNames = ["Select", "Pen", "Eraser", "Text"];
    const colors = ["red", "green", "gold", "blue", "black"];
    const eraserSizes = {
      Small: {
        size: "1rem",
        symbol: "S",
      },
      Medium: {
        size: "1.5rem",
        symbol: "M",
      },
      Large: {
        size: "2rem",
        symbol: "L",
      },
      XtraLarge: {
        size: "3rem",
        symbol: "XL",
      },
    };
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
          setEraseAll={this.setEraseAll}
          setEraserProps={this.setEraserProps}
          eraserSizes={eraserSizes}
        />
      </div>
    );
  }
}

export default App;
