import { useDispatch } from 'react-redux';
import { checkStatusBook } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const checkStatus = (e) => {
    dispatch(checkStatusBook(e.target.value));
  };

  return (
    <section className="categories-section">
      <button type="button" className="btn status" onClick={checkStatus}>CHECK STATUS</button>
    </section>
  );
};
export default Categories;
