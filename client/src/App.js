import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div>
      <Home />
      {/* <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/home" 
          element={<Home />} 
        />
        
      </Routes> */}
    </div>
  );
};

export default App;
