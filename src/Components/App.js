import React, { Component } from "react";
import Header from "./Header/Header";
import ComponentPanel from "./Panel/ComponentPanel";
import "./App.css";
import TextPanel from "./Panel/TextPanel";

const canvasRef = React.createRef(null);
const contextRef = React.createRef(null);

class App extends Component {
  constructor() {
    super();
    this.state = {
      doubleClickEvent: false,
      onHover: false,
      isDoubleClicked: true,
      isHoveringAllowed: true,
      hoveredComponent: "Cursor",
      selectedComponent: "Cursor",
      PenFeatures: {
        selectedPenColor: "black",
        selectedPointerSize: 2,
      },
      EraserFeatures: {
        EraserSymbol: "M",
        EraserSize: "1.5rem",
        DeleteAll: false,
      },
      isDrawing: false,
    };
  }

  uploadImageData = (e) => {
    console.log(e);
    e.preventDefault();
    const fileSelector = (
      <input type="file" name="file" sayHi={onchange()}>
        assss
      </input>
    );
    console.log(fileSelector);
    return fileSelector;
  };

  downloadImageData = () => {
    const image = canvasRef.current.toDataURL();
    //console.log(image);
    const tempLink = document.createElement("a");
    tempLink.download = "image.png";
    tempLink.href = image;

    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };
  changepenFeatures = () => {
    contextRef.current.lineWidth =
      (this.state.PenFeatures.selectedPointerSize / 2 + 0.5) * 2;
    contextRef.current.strokeStyle = this.state.PenFeatures.selectedPenColor;
  };

  componentDidMount() {
    document.body.style.overflow = "hidden";
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // ctx.scale(2, 2);
    //var img = document.getElementById("meow");
    // ctx.drawImage(img, 10, 10);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.font = "48px serif";
    ctx.strokeStyle = this.state.PenFeatures.selectedPenColor;
    ctx.lineWidth = (this.state.PenFeatures.selectedPointerSize / 2 + 0.5) * 2;
    contextRef.current = ctx;
  }
  addDot = (e) => {
    const { clientX, clientY } = e;
    const radius = contextRef.current.lineWidth / 2;
    var ctx = contextRef.current;
    ctx.beginPath();
    ctx.arc(clientX, clientY, radius, 0, 2 * Math.PI);
    ctx.stroke();
    contextRef.current = ctx;
  };
  startDrawing = (e) => {
    // console.log(e);
    if (
      this.state.selectedComponent !== "Pen" &&
      this.state.selectedComponent !== "Eraser"
    ) {
      return;
    }

    const { clientX: screenX, clientY: screenY } =
      e.type === "mousedown" ? e : e.touches ? e.touches[0] : "";
    const { view } = e;
    const { scrollX, scrollY } = view;
    var X = screenX + scrollX - 8;
    var Y = screenY + scrollY - 10;
    // contextRef.fillRect(screenX, screenY, , 1);
    contextRef.current.beginPath();
    // contextRef.current.strokeStyle = "black";
    // contextRef.current.lineWidth = 10;
    contextRef.current.moveTo(X, Y);
    this.setState({ isDrawing: true });
  };
  finishDrawing = () => {
    if (
      this.state.selectedComponent !== "Pen" &&
      this.state.selectedComponent !== "Eraser"
    ) {
      return;
    }
    contextRef.current.closePath();
    this.setState({ isDrawing: false });
  };
  draw = (e) => {
    //console.log(e);
    if (
      this.state.selectedComponent !== "Pen" &&
      this.state.selectedComponent !== "Eraser"
    ) {
      return;
    }
    if (!this.state.isDrawing) {
      return;
    }
    const { clientX: screenX, clientY: screenY } =
      e.type === "mousemove" ? e : e.touches ? e.touches[0] : "";
    const { view } = e;
    const { scrollX, scrollY } = view;
    var X = screenX + scrollX - 8;
    var Y = screenY + scrollY - 10;
    contextRef.current.lineTo(X, Y);
    contextRef.current.stroke();
  };

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
        const eraserPointerSize = this.state.EraserFeatures.EraserSize.replace(
          "rem",
          ""
        );
        contextRef.current.lineWidth = eraserPointerSize * 16;
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
        contextRef.current.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        this.setState({
          EraserFeatures: {
            ...this.state.EraserFeatures,
            DeleteAll: false,
          },
        });
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
        this.changepenFeatures();
      }
    );
  };
  setSelectedPointerSize = (value) => {
    this.setState(
      {
        PenFeatures: {
          ...this.state.PenFeatures,
          selectedPointerSize: value,
        },
      },
      () => {
        this.changepenFeatures();
      }
    );
  };

  setHoveredHeader = (header_value) => {
    this.setState({ hoveredComponent: header_value });
  };
  setSelectedHeader = (component_selected) => {
    this.setState({ selectedComponent: component_selected }, () => {
      if (this.state.selectedComponent === "Pen") {
        contextRef.current.globalCompositeOperation = "source-over";
        contextRef.current.strokeStyle =
          this.state.PenFeatures.selectedPenColor;
        contextRef.current.lineWidth =
          (this.state.PenFeatures.selectedPointerSize / 2 + 0.5) * 2;
      } else if (this.state.selectedComponent === "Eraser") {
        contextRef.current.globalCompositeOperation = "destination-out";
        const eraserPointerSize = this.state.EraserFeatures.EraserSize.replace(
          "rem",
          ""
        );
        contextRef.current.lineWidth = eraserPointerSize * 16;
      }
      if (
        this.state.selectedComponent === "Eraser" ||
        this.state.selectedComponent === "Pen"
      ) {
        this.setState({ isHoveringAllowed: false });
      }
    });
  };
  setOnHover = (val) => {
    this.setState({ onHover: val });
  };
  drawDataURIOnCanvas = (strDataURI, canvas) => {
    var img = new window.Image();
    img.addEventListener("load", function () {
      canvas.getContext("2d").drawImage(img, 0, 0);
    });
    img.setAttribute("src", strDataURI);
  };
  render() {
    const componentNames = [
      "Cursor",
      "Pen",
      "Eraser",
      "Text",
      "Scroll",
      "Upload",
      "Download",
    ];
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
      <div
        className="AppComponent"
        style={{
          width: window.innerWidth,
          height: window.innerHeight,
        }}
      >
        {/* <img
          id="meow"
          alt="cat"
          height={12}
          width={10}
          src="https://rukminim2.flixcart.com/image/416/416/k3j1z0w0/sticker/t/h/2/white-glossy-modern-art572-large-61-white-glossy-modern-art572-original-imafmhf5mzjqyyzh.jpeg?q=70"
        />{" "} */}
        <canvas
          id="canvas"
          style={{
            position: "absolute",
            // border: "2px solid black",
            opacity: 0.8,
          }}
          width={window.innerWidth}
          height={window.innerHeight}
          // onClick={(e) => {
          //   console.log(e);
          //   this.addDot(e);
          // }}
          onTouchStart={(e) => {
            if (e.pointerType === "mouse") {
              return;
            }
            // console.log(e);
            this.startDrawing(e);
          }}
          onTouchEnd={(e) => {
            if (e.pointerType === "mouse") {
              return;
            }
            // console.log(e);
            this.finishDrawing();
          }}
          onTouchMove={(e) => {
            if (e.pointerType === "mouse") {
              return;
            }
            // console.log(e);
            this.draw(e);
          }}
          onMouseDown={(e) => {
            this.startDrawing(e);
          }}
          onMouseUp={() => {
            this.finishDrawing();
          }}
          onMouseMove={(e) => {
            this.draw(e);
          }}
          onDoubleClick={(e) => {
            this.setState({ isDoubleClicked: !this.state.isDoubleClicked });
            this.setState({ doubleClickEvent: e });
          }}
          ref={canvasRef}
        />
        {this.state.isDoubleClicked ? (
          <TextPanel
            doubleClickEvent={this.state.doubleClickEvent}
            canvasRef={canvasRef}
            contextRef={contextRef}
          />
        ) : (
          ""
        )}
        <Header
          penColors={colors}
          stateComponents={this.state}
          setSelectedPenColor={this.setSelectedPenColor}
        />
        <ComponentPanel
          startDrawing={this.startDrawing}
          finishDrawing={this.finishDrawing}
          draw={this.draw}
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
          isHoveringAllowed={this.state.isHoveringAllowed}
          downloadImageData={this.downloadImageData}
          uploadImageData={this.uploadImageData}
        />
      </div>
    );
  }
}

export default App;
