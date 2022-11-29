import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

import Signin from "./pages/Auth/signin/Signin";
import Signup from "./pages/Auth/signup/Signup";
import Home from "./pages/home/Home";
import { theme } from "./theme/theme";
import { UserAuth } from "../src/context/AuthContext";

function App() {
  const { user } = UserAuth();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={user ? <Home /> : <Signin />} />
            <Route path="/signup" element={user ? <Home /> : <Signup />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
