import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/header";
import Table from "./Components/Table/Table";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<Navigate to="/table/1" />} />
          <Route path="/table/:page" element={<Table />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
