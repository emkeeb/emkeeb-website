import Header from "./Header";
import Home from "./Home";
import About from "./About";
import BuildService from "./BuildService";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* this is where the top level of everything will sit */
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/build-service" element={<BuildService />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
