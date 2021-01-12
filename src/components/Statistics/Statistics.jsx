import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import s from './statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      {total > 0 ? (
        <ul className={s.list}>
          <li className={s.item}>Good: {good}</li>
          <li className={s.item}>Neutral: {neutral}</li>
          <li className={s.item}>Bad: {bad}</li>
          <li className={s.item}>Total: {total}</li>
          <li className={s.item} style={{ color: '#241936bf' }}>
            Positive feedback: {positivePercentage}%
          </li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
