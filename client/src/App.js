import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Library from "./components/library/Library";

const App = () => {
  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/home" 
          element={<Home />} 
        />
        <Route 
          path="/library" 
          element={<Library />} 
        />
      </Routes>
    </div>
  );
};

export default App;
