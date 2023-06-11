import css from './Filter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from 'redux/selectors';
import { updateFilter } from 'redux/phonebookSlice';

const Filter = function () {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const handlerFilterInputChange = event => {
    const { value } = event.target;
    dispatch(updateFilter(value));
  };

  return (
    <div className={css.filter}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={e => handlerFilterInputChange(e)}
      />
    </div>
  );
};

export default Filter;
