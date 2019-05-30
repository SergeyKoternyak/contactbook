// Global
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Styles
import style from './avatar.scss';

// Constants
import {
  AVATAR_ALT,
  AVATAR_DEFAULT_URL,
  AVATAR_SIZE_SM,
  AVATAR_SIZE_LG
} from '../../constants/avatarProps';

const Avatar = ({
  size,
  src
}) => {
  const [avatarSrc, setAvatarSrc] = useState(src || AVATAR_DEFAULT_URL);

  return (
    <img
      alt={AVATAR_ALT}
      className={classNames(
        style.avatar,
        style[size]
      )}
      src={avatarSrc}
      onError={() => setAvatarSrc(AVATAR_DEFAULT_URL)}
    />
  );
};

Avatar.defaultProps = {
  size: AVATAR_SIZE_SM,
  src: AVATAR_DEFAULT_URL
};

Avatar.propTypes = {
  size: PropTypes.oneOf([
    AVATAR_SIZE_SM,
    AVATAR_SIZE_LG
  ]),
  src: PropTypes.string
};

export default Avatar;
