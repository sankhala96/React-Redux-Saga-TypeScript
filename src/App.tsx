import React from 'react';
import { connect } from 'react-redux';
import UsersList from './components/UsersList';
import { User } from './types/userTypes';
import { getUserRequest, createUserRequest } from './actions/user';
import AddUser from './components/AddUser';

type Props = {
  users: User[]
  getUserRequest: () => void
  createUserRequest: (user: User) => void
}

class App extends React.Component<Props,{}> {
  componentDidMount() {
    this.props.getUserRequest();
  }

  onAddUser = (user: User) => {
    this.props.createUserRequest(user);
  }

  onDeleteUser = (userId: string) => {

  }

  render() {
    return (
      <div>
        <AddUser submitForm={this.onAddUser} />
        <UsersList users={this.props.users} onDeleteUser={this.onDeleteUser} />
      </div>
    )
  }
}

const mapStateToProps = (state: { user: { users:  User[]}; }) => {
  return {
    users: state.user.users
  }
}

export default connect(mapStateToProps, { getUserRequest, createUserRequest })(App);
