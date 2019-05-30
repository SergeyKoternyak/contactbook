import React from 'react';

import {
  ICON_ACTIONS,
  ICON_BURGER,
  ICON_CLOSE,
  ICON_LOGOUT
} from '../../constants/iconNames';

import Actions from './icons/actions.svg';
import Burger from './icons/burger.svg';
import Close from './icons/close.svg';
import Logout from './icons/logout.svg';

const Icon = props => {
  switch (props.name) {
    case ICON_ACTIONS:
      return <Actions />;
    case ICON_BURGER:
      return <Burger />;
    case ICON_CLOSE:
      return <Close />;
    case ICON_LOGOUT:
      return <Logout />;
    default:
      return null;
  }
};

export default Icon;
