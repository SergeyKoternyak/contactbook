// Global
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Constants

// Styles
import style from './button.scss';

const Button = ({
  children,
  customClass,
  disabled,
  to,
  onClick,
  view
}) => {
  const buttonClasses = classNames(
    style.button,
    customClass,
    { [style.disabled]: disabled },
    { [style[view]]: view },
  );

  return to ? (
    <Link
      className={buttonClasses}
      to={to}
    >
      {children}
    </Link>
  ) : (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      type='submit'
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  customClass: null,
  disabled: false,
  to: null,
  onClick: null,
  view: null
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  customClass: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  onClick: PropTypes.func,
  view: PropTypes.oneOf(['icon'])
};

export default Button;
