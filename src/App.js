import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaSearch} from 'react-icons/fa';
import { Navbar, Grid, Button} from 'react-bootstrap';
import SideBar from "./navbar";
import ReactCardCarousel from "./cards";

function App() {
  return (
    <div className="App" id="App">
      <Navbar className="navbar" bg="dark" variant="dark">
        <SideBar outerContainerId={"App"}/>
        <Navbar.Brand className="brand center-text">LiBER</Navbar.Brand></Navbar>
        <header className="App-header">
        <div className="searchbar">
          <input type="text" id="search" placeholder="Search"></input>
          <Button id="searchbutton"><FaSearch/></Button>
          <div className="newmovies">
          <p>
            New Movies
          </p>
        </div>
        <div id="newmoviescards">
              <ReactCardCarousel/>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
