import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Blog from "./pages/Blog";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
