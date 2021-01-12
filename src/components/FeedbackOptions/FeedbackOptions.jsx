import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ onBtnClick }) {
  return (
    <div>
      <ul className={s.list}>
        <li className={s.item}>
          <button className={s.button} name="good" type="button" onClick={onBtnClick}>
            Good
          </button>
        </li>

        <li className={s.item}>
          <button className={s.button} name="neutral" type="button" onClick={onBtnClick}>
            Neutral
          </button>
        </li>

        <li className={s.item}>
          <button className={s.button} name="bad" type="button" onClick={onBtnClick}>
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onBtnClick: PropTypes.func,
};

export default FeedbackOptions;
