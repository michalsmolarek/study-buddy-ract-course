import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  width: 25%;
  padding: 40px 30px;
  border-radius: 25px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 5px 10px -5px rgba(0,0,0,.3);
`;



const UsersList = () => (
  <Wrapper>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </Wrapper>
);

export default UsersList;
