import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Edit from "./pages/Edit.js"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/add" element={<Edit />}/>
        </Routes>
    </Router>
  );
}

export default App;
