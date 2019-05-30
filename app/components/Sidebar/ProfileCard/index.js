// Global
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import style from './profileCard.scss';

// Components
import Avatar from '../../Avatar';
import Button from '../../Button';
import Icon from '../../Icon';

// Constants
import { BUTTON_ICON } from '../../../constants/buttonTypes';
import { ICON_LOGOUT } from '../../../constants/iconNames';
import {
  PATH_LOGOUT,
  PATH_PROFILE
} from '../../../constants/pathNames';

// Helpers
import { getFullName } from '../../../helpers';

const ProfileCard = ({ profile }) => (
  <div className={style.card}>
    <Link
      to={PATH_PROFILE}
      className={style.profileButton}
    >
      <Avatar customClass={style.avatar} />

      <span className={style.name}>
        {getFullName(profile)}
      </span>
    </Link>

    <Button
      customClass={style.logoutButton}
      to={PATH_LOGOUT}
      view={BUTTON_ICON}
    >
      <Icon name={ICON_LOGOUT} />
    </Button>
  </div>
);

export default ProfileCard;
