import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { actionSetActiveBtn } from '../../actions/btnsActions';

import style from './FiltersBtns.module.scss';

export default function FiltersBtns() {
  const { btnsList, currentBtn } = useSelector(({ btns }) => btns);
  const dispatch = useDispatch();

  const renderFilters = (filtersList) => {
    return filtersList.map((filterBtn) => {
      const btnClass = classNames(style['content__filterBtn'], {
        [style.active]: filterBtn === currentBtn,
      });

      return (
        <button
          className={btnClass}
          key={filterBtn}
          onClick={() => dispatch(actionSetActiveBtn(filterBtn))}
        >
          {filterBtn}
        </button>
      );
    });
  };

  return <div className={style['content__filtersBtns']}>{renderFilters(btnsList)}</div>;
}
