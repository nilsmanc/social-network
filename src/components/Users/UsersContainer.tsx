import React from 'react';
import { useSelector } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { getIsFetching } from '../../redux/users-selectors';
import { Users } from './Users';

export const UsersPage: React.FC = () => {
  const isFetching = useSelector(getIsFetching);
  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users />
    </>
  );
};
