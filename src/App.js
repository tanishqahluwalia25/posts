import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/home/HomePage";

import "./App.css";

function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default App;
