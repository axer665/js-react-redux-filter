import './FilterForm.scss';
import { useDispatch } from 'react-redux';
import { filterList } from '../../actions/actionsCreater';

export default function AddForm() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(filterList(value));
  }

  return (
    <div className="add-form addform">
      <input
        onChange={handleChange}
        id='filter'
        type="text"
        className="addform__input"
        placeholder='Фильтр по наименованию услуги'
      />
    </div>
  )
}