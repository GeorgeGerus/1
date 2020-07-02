import React, { Component } from 'react'
import axios from 'axios';

import UsersList from '../../components/UsersList'
import Preloader from '../../components/Preloader';
import Button from '../../components/Button';
import { connect } from 'react-redux';
import { setUsers } from '../../ducks/app';

const API_URL = 'https://randomuser.me/api/?results=10';

class Main extends Component {
  constructor(props) {
    super(props);

    this.handleFetchUsers = this.handleFetchUsers.bind(this);

    this.state = {
      users: [],
      loading: false,
      errorMessage: '',
      userId: localStorage.getItem('userId')
    }
  }

  async handleFetchUsers() {
    const { setUsers } = this.props;

    try {
      this.setState({ loading: true });
      const result = await axios.get(API_URL)
      const { data: { results: users } } = result;
      setUsers(users);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ errorMessage: error.message, loading: false });
    }
  }

  render() {
    const { loading, errorMessage } = this.state;
    const { users } = this.props;

    return (
      <div className="app-container">
        <div className="app-header"><h2>Users list</h2><Button className="fetch-button" onClick={this.handleFetchUsers} label="Fetch users" /></div>
        {errorMessage && <span className="error-message">{errorMessage}</span>}
        { loading ? <Preloader /> : <UsersList users={users}/>}
      </div>
    )
  }
}

export default connect(
  state => ({ users: state.app.users }),
  {
    setUsers,
  }
)(Main)