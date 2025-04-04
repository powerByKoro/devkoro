import { Route, Routes } from "react-router-dom";
import { default as Home } from "./pages/home/Index";
import { default as Projects } from "./pages/projects/Index";
import { default as Settings } from "./pages/settings/Index";
import { default as Milestones } from "./pages/milestones/Index";
import { default as Tasks } from "./pages/tasks/Index";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/milestones" element={<Milestones />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
}

export default App;
