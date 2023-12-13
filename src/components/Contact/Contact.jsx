import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const Contact = ({value}) => { 
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(value.id));
  };
  return(
    <div className={css.wrapper}>
  <li className={css.item}>
    {value.name}:{value.number}
    <button
      className={css.button}
      type="button"
      onClick={handleDelete}
    >
      Delete
    </button>
  </li>
  </div>
);}



