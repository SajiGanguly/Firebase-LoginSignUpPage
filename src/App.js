import "./App.css";
import SignIn from "./components/Pages/SignIn";

import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import SignUp from "./components/Pages/SignUp";
import MainPage from "./components/Pages/MainPage";

function App() {
 

  return (
    <Router>
      {""}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
