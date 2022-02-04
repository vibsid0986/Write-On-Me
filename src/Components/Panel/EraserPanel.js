import React, { Component } from "react";
import "./EraserPanel.css";

class EraserPanel extends Component {
  state = { onHover: false };
  render() {
    if (!this.props.EnableEraserProps) {
      return (
        <div>
          <i className="fa fa-eraser fa_custom fa-2x" />
        </div>
      );
    } else {
      return (
        <div
          onMouseEnter={() => {
            clearTimeout(this.props.timerId);
          }}
        >
          <div className="eraser-components">
            <span
              style={{
                width: this.props.eraserSizes.Small.size,
                height: this.props.eraserSizes.Small.size,
              }}
              onClick={() => {
                this.props.setEraserProps(
                  this.props.eraserSizes.Small.size,
                  this.props.eraserSizes.Small.symbol
                );
              }}
            ></span>
            <span
              style={{
                width: this.props.eraserSizes.Medium.size,
                height: this.props.eraserSizes.Medium.size,
              }}
              onClick={() => {
                this.props.setEraserProps(
                  this.props.eraserSizes.Medium.size,
                  this.props.eraserSizes.Medium.symbol
                );
              }}
            ></span>
            <span
              style={{
                width: this.props.eraserSizes.Large.size,
                height: this.props.eraserSizes.Large.size,
              }}
              onClick={() => {
                this.props.setEraserProps(
                  this.props.eraserSizes.Large.size,
                  this.props.eraserSizes.Large.symbol
                );
              }}
            ></span>
            <span
              style={{
                width: this.props.eraserSizes.XtraLarge.size,
                height: this.props.eraserSizes.XtraLarge.size,
              }}
              onClick={() => {
                this.props.setEraserProps(
                  this.props.eraserSizes.XtraLarge.size,
                  this.props.eraserSizes.XtraLarge.symbol
                );
              }}
            ></span>
          </div>
          <div
            className="delete-all-outer"
            style={{ opacity: this.state.hover ? "1" : "0.8" }}
            onMouseEnter={() => {
              this.setState({ hover: true });
            }}
            onClick={() => {
              this.props.setEraseAll();
            }}
            onMouseLeave={() => {
              this.setState({ hover: false });
            }}
          >
            <div className="delete-all-inner">
              <span style={{ opacity: this.state.hover ? "1" : "0.8" }}></span>
            </div>
          </div>
          <i className="fa fa-eraser fa_custom fa-2x" />
        </div>
      );
    }
  }
}

export default EraserPanel;
