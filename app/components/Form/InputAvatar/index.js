// Global
import React from 'react';

// Styles
import style from './inputAvatar.scss';

const InputAvatar = () => (
  <label className={style.root}>
    <input
      className={style.input}
      type='file'
    />
    <div className={style.avatar} />
  </label>
);

export default InputAvatar;
