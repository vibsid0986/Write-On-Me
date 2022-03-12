import React, { Component } from "react";
import "./ComponentPanel.css";
import MouseIcon from "@mui/icons-material/Mouse";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import PenPanel from "./PenPanel";
import EraserPanel from "./EraserPanel";
import SwipeIcon from "@mui/icons-material/Swipe";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileSelector from "./FileSelector";

// import { TextareaAutosize } from "@mui/material";

class ComponentPanel extends Component {
  constructor() {
    super();
    this.state = {
      hoveredComponent: "",
      selectedComponent: "Cursor",
      EnablePenProps: false,
      EnableEraserProps: false,
      timerIdPenPallete: -1,
      timerIdEraserPanel: -1,
    };
  }
  onchangeHandler = (e) => {
    console.log(e);
  };
  setMouseHoverState = (variable) => {
    this.setState({ hoveredComponent: variable }, () => {
      this.props.setHoveredHeader(this.state.hoveredComponent);
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
          // onMouseDown={(e) => {
          //   if (this.state.selectedComponent !== this.props.componentNames[0]) {
          //     return;
          //   }
          //   if (
          //     this.state.selectedComponent === this.props.componentNames[1] ||
          //     this.state.selectedComponent === this.props.componentNames[2]
          //   ) {
          //     this.props.startDrawing(e);
          //   }
          // }}
          // onMouseUp={() => {
          //   if (this.state.selectedComponent !== this.props.componentNames[0]) {
          //     return;
          //   }
          //   if (
          //     this.state.selectedComponent === this.props.componentNames[1] ||
          //     this.state.selectedComponent === this.props.componentNames[2]
          //   ) {
          //     this.props.finishDrawing();
          //   }
          // }}
          // onMouseMove={(e) => {
          //   if (this.state.selectedComponent !== this.props.componentNames[0]) {
          //     return;
          //   }
          //   if (
          //     this.state.selectedComponent === this.props.componentNames[1] ||
          //     this.state.selectedComponent === this.props.componentNames[2]
          //   ) {
          //     this.props.draw(e);
          //   }
          // }}
        >
          <div
            className="item-cont"
            onMouseEnter={(e) => {
              this.setMouseHoverState(this.props.componentNames[0]);
              this.props.setOnHover(true);
            }}
            onMouseLeave={(e) => {
              this.setMouseHoverState(this.state.selectedComponent);
              this.props.setOnHover(false);
            }}
            onClick={() => {
              this.setSelectedComponentState(this.props.componentNames[0]);
            }}
          >
            <MouseIcon fontSize="large" />
          </div>
          <div
            className="item-cont"
            onMouseEnter={() => {
              this.setMouseHoverState(this.props.componentNames[1]);
              this.setState({ EnablePenProps: true });
              this.props.setOnHover(true);
            }}
            onMouseLeave={() => {
              const TIMER = setTimeout(() => {
                this.setMouseHoverState("");
                this.setState({ EnablePenProps: false });
              }, 500);
              this.setState({ timerIdPenPallete: TIMER });
              this.props.setOnHover(false);
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
              selectedPenColor={this.props.selectedPenColor}
            />
          </div>
          <div
            className="item-cont"
            onMouseEnter={() => {
              this.setMouseHoverState(this.props.componentNames[2]);
              this.setState({ EnableEraserProps: true });
              this.props.setOnHover(true);
            }}
            onMouseLeave={() => {
              const TIMER = setTimeout(() => {
                this.setMouseHoverState("");
                this.setState({ EnableEraserProps: false });
              }, 500);
              this.setState({ timerIdEraserPanel: TIMER });
              this.props.setOnHover(false);
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
            onMouseEnter={() => {
              this.setMouseHoverState(this.props.componentNames[3]);
              this.props.setOnHover(true);
            }}
            onMouseLeave={() => {
              this.setMouseHoverState(this.state.selectedComponent);
              this.props.setOnHover(false);
            }}
            onClick={() => {
              this.setSelectedComponentState(this.props.componentNames[3]);
            }}
          >
            <TextFieldsIcon fontSize="large" />
          </div>
          <div
            className="item-cont"
            onMouseEnter={() => {
              this.setMouseHoverState(this.props.componentNames[4]);
              this.props.setOnHover(true);
            }}
            onMouseLeave={() => {
              this.setMouseHoverState(this.state.selectedComponent);
              this.props.setOnHover(false);
            }}
            onClick={() => {
              this.setSelectedComponentState(this.props.componentNames[4]);
            }}
          >
            <SwipeIcon fontSize="large" />
          </div>
          <div
            className="item-cont"
            onMouseEnter={() => {
              this.setMouseHoverState(this.props.componentNames[5]);
              this.props.setOnHover(true);
            }}
            onMouseLeave={() => {
              this.setMouseHoverState(this.state.selectedComponent);
              this.props.setOnHover(false);
            }}
            onClick={(e) => {
              // return <FileSelector />;
              // this.setSelectedComponentState(this.props.componentNames[5]);
              const k = this.props.uploadImageData(e);
              console.log(k.props.sayHi());
            }}
          >
            <FileUploadIcon fontSize="large" />
            {/* <input type="file" onChange={() => this.onchangeHandler()}></input> */}
          </div>
          <div
            className="item-cont"
            onMouseEnter={() => {
              this.setMouseHoverState(this.props.componentNames[6]);
              this.props.setOnHover(true);
            }}
            onMouseLeave={() => {
              this.setMouseHoverState(this.state.selectedComponent);
              this.props.setOnHover(false);
            }}
            onClick={() => {
              // this.setSelectedComponentState(this.props.componentNames[6]);
              this.props.downloadImageData();
            }}
          >
            <FileDownloadIcon fontSize="large" />
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentPanel;
