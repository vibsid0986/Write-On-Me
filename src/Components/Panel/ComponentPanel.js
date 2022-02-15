import React, { Component } from "react";
import "./ComponentPanel.css";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import PenPanel from "./PenPanel";
import EraserPanel from "./EraserPanel";

class ComponentPanel extends Component {
  constructor() {
    super();
    this.state = {
      hoveredComponent: "",
      selectedComponent: "Select",
      EnablePenProps: false,
      EnableEraserProps: false,
      timerIdPenPallete: -1,
      timerIdEraserPanel: -1,
    };
  }
  setMouseHoverState = (variable) => {
    this.setState({ hoveredComponent: variable }, () => {
      this.props.setHoveredHeader(this.state.hoveredComponent);
      this.props.setOnHover(!this.props.onHover);
    });
  };
  setSelectedComponentState = (newState) => {
    this.setState({ selectedComponent: newState }, () => {
      this.props.setSelectedHeader(this.state.selectedComponent);
    });
  };

  render() {
    // const setSelectedPenColor = this.props.setSelectedPenColor;
    // const penPointerSize = this.props.penPointerSize;
    // const setSelectedPointerSize = this.props.setSelectedPointerSize;
    // const selectedPointerSize = this.props.selectedPointerSize;
    // const selectedPenColor = this.props.selectedPenColor;
    return (
      <div>
        <div
          className="panel-cont"
          onMouseDown={(e) => {
            if (this.state.EnablePenProps) {
              return;
            }
            if (
              this.state.selectedComponent === this.props.componentNames[1] ||
              this.state.selectedComponent === this.props.componentNames[2]
            ) {
              this.props.startDrawing(e);
            }
          }}
          onMouseUp={() => {
            if (this.state.EnablePenProps) {
              return;
            }
            if (
              this.state.selectedComponent === this.props.componentNames[1] ||
              this.state.selectedComponent === this.props.componentNames[2]
            ) {
              this.props.finishDrawing();
            }
          }}
          onMouseMove={(e) => {
            if (this.state.EnablePenProps) {
              return;
            }
            if (
              this.state.selectedComponent === this.props.componentNames[1] ||
              this.state.selectedComponent === this.props.componentNames[2]
            ) {
              this.props.draw(e);
            }
          }}
        >
          <div
            className="item-cont"
            onMouseEnter={() => {
              this.setMouseHoverState(this.props.componentNames[0]);
            }}
            onMouseLeave={() => {
              this.setMouseHoverState(this.state.selectedComponent);
            }}
            onClick={() => {
              this.setSelectedComponentState(this.props.componentNames[0]);
            }}
          >
            <ControlCameraIcon fontSize="large" />
          </div>
          <div
            className="item-cont"
            onMouseEnter={() => {
              this.setMouseHoverState(this.props.componentNames[1]);
              this.setState({ EnablePenProps: true });
            }}
            onMouseLeave={() => {
              const TIMER = setTimeout(() => {
                this.setMouseHoverState(this.state.selectedComponent);
                this.setState({ EnablePenProps: false });
              }, 500);
              this.setState({ timerIdPenPallete: TIMER });
            }}
            onClick={() => {
              this.setSelectedComponentState(this.props.componentNames[1]);
            }}
          >
            <PenPanel
              setSelectedPenColor={this.props.setSelectedPenColor}
              penColors={this.props.penColors}
              timerId={this.state.timerIdPenPallete}
              enablePenProps={this.state.EnablePenProps}
              penPointerSize={this.props.penPointerSize}
              setSelectedPointerSize={this.props.setSelectedPointerSize}
              selectedPointerSize={this.props.selectedPointerSize}
              selectedColor={this.props.selectedPenColor}
            />
          </div>
          <div
            className="item-cont"
            onMouseEnter={() => {
              this.setMouseHoverState(this.props.componentNames[2]);
              this.setState({ EnableEraserProps: true });
            }}
            onMouseLeave={() => {
              const TIMER = setTimeout(() => {
                this.setMouseHoverState(this.state.selectedComponent);
                this.setState({ EnableEraserProps: false });
              }, 500);
              this.setState({ timerIdEraserPanel: TIMER });
            }}
            onClick={() => {
              this.setSelectedComponentState(this.props.componentNames[2]);
            }}
          >
            <EraserPanel
              timerId={this.state.timerIdEraserPanel}
              EnableEraserProps={this.state.EnableEraserProps}
              setEraseAll={this.props.setEraseAll}
              setEraserProps={this.props.setEraserProps}
              eraserSizes={this.props.eraserSizes}
            />
          </div>

          <div
            className="item-cont"
            onMouseEnter={() =>
              this.setMouseHoverState(this.props.componentNames[3])
            }
            onMouseLeave={() =>
              this.setMouseHoverState(this.state.selectedComponent)
            }
            onClick={() => {
              this.setSelectedComponentState(this.props.componentNames[3]);
            }}
          >
            <TextFieldsIcon fontSize="large" />
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentPanel;
