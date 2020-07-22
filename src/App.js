import React from 'react';
import logo from './logo.svg';
import { render } from "react-dom";
//import Forms from "./Forms";
//import NavBar from "./NavBar";
import './App.css';

import { Button, Form, FormGroup, Label, Inpute, Video } from 'reactstrap';
// import './App.css';  
function App() {
    return (
      <div className="App">
        <div className="container">
          <h1> Rafik Gasmi</h1>
        </div>
        <div className="container">
          <div className="jumbotron">
            {/* <h1> Todo app</h1> */}
            <form>
              <h1 className="initialism">My Form </h1>
              <FormGroup>
                <div>
                  <label for="name">Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className="form-control" type="text" placeholder="name"></input>
                </div>
                <div>
                  <label >prenom:</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input className="form-control" type="text" placeholder="prenom"></input>
                </div>
                <div>
                  <label>email :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className="form-control" type="text" placeholder="email"></input>
                </div>
                <div>
                  <label>Comment :</label>
                  <textarea className="form-control" rows="4" cols="50" name="comment" form="usrform" placeholder="say something"></textarea>
                </div>
              </FormGroup>
              <div>
                <button type="submit" className="btn btn-primary">submit</button>
                &nbsp;&nbsp;<button className="btn btn-danger" type="reset" >Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
export default App;