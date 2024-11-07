import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewAllMarket from "./components/ViewAllMarket";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewAllMarket />} />
      </Routes>
    </Router>
  );
}

export default App;
