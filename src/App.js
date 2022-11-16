import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar, Modal, Sidebar } from "./components";
import { Home, Places } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="places" element={<Places />} />
        </Routes>
        <Modal />
        <Sidebar />
        <Footer />
      </Router>
    </>
  );
}

export default App;
