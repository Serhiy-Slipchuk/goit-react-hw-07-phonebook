import css from './ContactItem.module.scss';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebookSlice';
import PropTypes from 'prop-types';

const ContactItem = function ({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem}>
      <p className={css.contactText}>
        {name}
        <span className={css.phoneText}>{number}</span>
      </p>
      <button
        className={css.button}
        type="button"
        id={id}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
