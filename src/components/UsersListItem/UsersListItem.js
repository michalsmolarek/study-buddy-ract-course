import React from 'react';
import propTypes from 'prop-types';

const UsersListItem = ({ userData: { average, name, attendence } }) => (
  <>
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendence}</p>
      </div>
      <button>x</button>
    </li>
  </>
);

UsersListItem.propTypes = {
  userData: propTypes.shape({
    average: propTypes.string,
    name: propTypes.string.isRequired,
    attendence: propTypes.string,
  }),
};

export default UsersListItem;
