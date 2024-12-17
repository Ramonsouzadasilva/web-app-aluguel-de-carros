import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import ListarCarros from "./pages/listar-carros";
import "./index.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/carros" element={<ListarCarros />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
