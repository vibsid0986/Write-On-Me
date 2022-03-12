import React, { Component } from "react";
import "./TextPanel.css";

class TextPanel extends Component {
  render() {
    const { doubleClickEvent, canvasRef, contextRef } = this.props;
    let x_cor = doubleClickEvent.clientX;
    let y_cor = doubleClickEvent.clientY;
    return (
      <div>
        <div
          className="writable"
          style={{
            left: doubleClickEvent.clientX + "px",
            top: doubleClickEvent.clientY + "px",
            maxWidth: window.innerWidth - doubleClickEvent.clientX + "px",
            maxHeight: window.innerHeight - doubleClickEvent.clientY + "px",
          }}
          contentEditable={true}
          //   onKeyPress={(e) => {
          //     console.log(e);
          //     contextRef.current.fillText(e.key, x_cor, y_cor);
          //     x_cor = x_cor + 25;
          //   }}
        ></div>
      </div>
    );
  }
}

export default TextPanel;
