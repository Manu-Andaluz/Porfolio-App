import { useState } from "react";
import "./App.css";
import Element from "./components/Element";
import sections from "./components/Data";
function App() {
  return <Element item={sections} />;
}

export default App;
