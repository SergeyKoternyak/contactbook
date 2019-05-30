// Global
import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import style from './categoryItem.scss';

// Constants
import { PATH_CATEGORY } from '../../../constants/pathNames';

const CategoryItem = ({
  label,
  name
}) => (
  <NavLink
    activeClassName={style.active}
    className={style.button}
    to={`${PATH_CATEGORY}${name}`}
  >
    {label}
  </NavLink>
);

export default CategoryItem;
