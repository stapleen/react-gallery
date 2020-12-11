import React, { useEffect, useContext } from 'react';
import CircularProgress from './CircularProgress';
import User from '../containers/User';
import { TitleContext } from "../index";

const Users = ({ getUsers, users, isLoading, error }) => {
  const title = useContext(TitleContext).users;

  useEffect(() => {
    getUsers();
  }, []);

  if (!isLoading && !users) {
    return <p className="title">{error}</p>;
  }

  return (
    <div className="users">
      <p className="title">{title}</p>
      { isLoading && <CircularProgress /> }
      { !isLoading && <User /> }
    </div>
  );
}

export default Users;