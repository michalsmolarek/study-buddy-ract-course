import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UsersList.styles';

class UsersList extends React.Component {
  state = {
    users,
  };

  deleteUser = (name) => {
    const filtereduser = this.state.users.filter(user => user.name !== name);
    this.setState({users: filtereduser});
  }

  render() {
    return (
      <Wrapper>
        <StyledList>
          {this.state.users.map((userData, i) => (
            <UsersListItem deleteUser={this.deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}

export default UsersList;
