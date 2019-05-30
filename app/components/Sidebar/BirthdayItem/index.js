// Global
import React from 'react';
import { NavLink } from 'react-router-dom';
import pluralize from 'pluralize';

// Styles
import style from './birthdayItem.scss';

// Constants
import { PATH_CONTACT } from '../../../constants/pathNames';

// Helpers
import { getFullName } from '../../../helpers';

const BirthdayItem = ({
  age,
  birthday,
  id,
  ...contact
}) => (
  <NavLink
    activeClassName={style.active}
    className={style.button}
    to={`${PATH_CONTACT}${id}`}
  >
    <span className={style.name}>
      {getFullName(contact)}
    </span>

    <span className={style.birthday}>
      {birthday}
    </span>

    <span className={style.age}>
      {`${age} ${pluralize('year', age)}`}
    </span>
  </NavLink>
);

export default BirthdayItem;
