// Global
import React from 'react';

// Styles
import style from './input.scss';

// Constants
import { FIELD_TEXTAREA } from '../../../constants/fieldTypes';

const Input = ({
  label,
  type
  // ...props
}) => {
  const isTextArea = type === FIELD_TEXTAREA;

  return (
    <label className={style.root}>
      {label}
      {
        isTextArea ? (
          <textarea className={style.field} />
        ) : (
          <input className={style.field} />
        )
      }
    </label>
  );
};

Input.defaultProps = {
    type: 'text'
};

export default Input;
