import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Library from "./components/library/Library";
import Login from "./components/login/Login";
import Review from "./components/review/Review";

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
        <Route 
          path="/login" 
          element={<Login />} 
        />
        <Route 
          path="/review" 
          element={<Review />} 
        />
      </Routes>
    </div>
  );
};

export default App;
