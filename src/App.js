
import About from './pages/About';
import Categories from './pages/Categories';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";


function App() {
  return (
        <Router>
          <Layout>
            <Routes>
            <Route exact path="/" element={<Home />} />
            <Route  path="/categories" element={<Categories />} />
            <Route  path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Router>
   
  );
}

export default App;
