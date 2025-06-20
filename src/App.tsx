import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./pages/episodes";
import Location from "./pages/location";
import Characters from "./pages/characters";
import Landing from "./pages/landing";

function App() {
  return (
    <Router>
      <div className="relative overflow-hidden flex w-screen h-screen flex-col bg-[url('src/assets/fondo.webp')] bg-cover bg-no-repeat bg-fixed max-h-screen overflow-x-hidden overflow-y-auto custom-scrollbar">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
