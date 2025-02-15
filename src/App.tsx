import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Episodes from "./pages/episodes";
import Home from "./pages/home";
import Location from "./pages/location";

function App() {
  return (
    <Router>
      <div className="App ">
        <header>
          <Navbar />
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;
