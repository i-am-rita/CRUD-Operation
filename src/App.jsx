import "./App.css";
import { Routes, Route } from "react-router-dom";
import Createbook from "./components/Delete";
import Navbar from "./components/Navbar";
import Read from "./components/Read";
import Update from "./components/Update";
import Create from "./components/Create";
import Delete from "./components/Delete";

function App() {
  return (
    <div className="app">
      {/* <h1>CRUD</h1> */}
      <Navbar />
      <Routes>
        <Route path="/create" element={<Create />} />
      </Routes>
      <Routes>
        <Route path="/read" element={<Read />} />
      </Routes>
      <Routes>
        <Route path="/update" element={<Update />} />
      </Routes>
      <Routes>
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
