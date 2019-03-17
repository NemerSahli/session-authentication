import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App container center">
        {/* comment */}
        <h1 className="text-center">Session Authentication</h1>
        <div className="row justify-content-center">
        <Button className="btn-danger">login</Button>
        <Button className="btn-danger">load data from secret area</Button>
        <Button className="btn-danger">logout</Button>
        </div>
      </div>
    );
  }
}

export default App;
