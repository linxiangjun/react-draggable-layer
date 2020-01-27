import React from "react";
import ReactDOM from "react-dom";
import DraggableLayer from "react-draggable-layer";

const App = () => (
  <div>
    <DraggableLayer>
      <div>React Draggable Layer</div>
    </DraggableLayer>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
