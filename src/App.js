import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { logIn, loadItems, logOut } from './actions/access-my-page';

class App extends Component {
  async componentDidMount() {
    try {
      const response = await axios('http://localhost:8000/', {
        method: 'get'
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }
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
          <Button
            className="btn-danger"
            onClick={this.props.logIn.bind(this, this.props.user)}
          >
            login
          </Button>
          <Button className="btn-danger" onClick={this.props.loadItems}>
            load data from secret area
          </Button>
          <Button className="btn-danger" onClick={this.props.logOut}>
            logout
          </Button>
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
  { logIn, loadItems, logOut }
)(App);
