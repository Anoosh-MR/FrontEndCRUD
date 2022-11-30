import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/Auth/signin/Signin";
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
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
