import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App container center">
        {/* comment */}
        <h1 className="text-center">Session Authentication</h1>

        <div className="row justify-content-center">
          <div className="col-12 text-center">
            user: {this.props.user.email}
          </div>{' '}
          <div className="col-12 text-center">
            password: {this.props.user.password}
          </div>
          <Button className="btn-danger">login</Button>
          <Button className="btn-danger">load data from secret area</Button>
          <Button className="btn-danger">logout</Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.userReducer.user
});

export default connect(
  mapStateToProps,
  null
)(App);
