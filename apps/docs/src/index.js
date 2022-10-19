import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return <div className="App">hi</div>;
}

export default App;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
