import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { default as Home } from "./pages/home/Index";
import { default as Profile } from "./pages/profile/Index";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
