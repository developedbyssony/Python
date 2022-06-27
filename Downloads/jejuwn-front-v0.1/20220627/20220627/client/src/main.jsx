import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import { Activity, Navigation, Restaurant } from "./components/pages";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Router>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="activity" element={<Activity />} />
      <Route path="navigation" element={<Navigation />} />
    </Routes>
  </Router>
);