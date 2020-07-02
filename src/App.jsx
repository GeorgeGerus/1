import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Routes from './Routes'
import Layout from './layout/Layout';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: false,
      errorMessage: '',
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    )
  }
}

export default connect(state => ({ user: state.app.user }))(App);
