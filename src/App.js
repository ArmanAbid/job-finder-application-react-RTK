import React from "react";
import Home from './pages/Home';
import "./styles/style.css";
import Navbar from "./components/navbar/Navbar";
import AddNewJob from "./pages/AddNewJob";
import EditJob from './pages/EditJob';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      {['/', '/jobs/internship', '/jobs/fulltime',"/jobs/remote"].map((path,index) => <Route key={index} path={path} element={<Home />} />)}
        <Route path="/addjob" element={<AddNewJob />}/>
        <Route path="/editjob" element={<EditJob />}/>
      </Routes>
    </Router>
  );
}

export default App;
