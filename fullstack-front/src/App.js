import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/navbar';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/adduser';
import EditUser from './users/edituser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path ="/adduser" element={<AddUser/>}/>
          <Route exact path ="/edituser/:id" element={<EditUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
