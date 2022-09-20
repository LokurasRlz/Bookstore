import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatusBook } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(checkStatusBook());
  };
  const status = useSelector((state) => state.categoriesReducer);
  return (
    <>
      <button className="Check-status" onClick={handleStatus} type="button">CHECK STATUS</button>
      <h2>{status}</h2>
    </>
  );
};
export default Categories;
