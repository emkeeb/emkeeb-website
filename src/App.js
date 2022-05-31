import Header from './Header';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* this is where the top level of everything will sit */
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
