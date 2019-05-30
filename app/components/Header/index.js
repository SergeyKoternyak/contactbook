// Global
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Styles
import style from './header.scss';

// Components
import Button from '../Button';
import Icon from '../Icon';

// Constants
import { BUTTON_ICON } from '../../constants/buttonTypes';
import {
  ICON_ACTIONS,
  ICON_BURGER,
  ICON_CLOSE
} from '../../constants/iconNames';
import {
  MODE_MAIN,
  MODE_VIEW
} from '../../constants/modeTypes';

// Helpers
import { getFullName } from '../../helpers';

const Header = ({
  category,
  contact,
  customClass,
  handleMobileMenu,
  mode,
  title
}) => {
  const isMainMode = mode === MODE_MAIN;
  const isViewMode = mode === MODE_VIEW;
  const actionButtonIconName = isViewMode ? ICON_ACTIONS : ICON_CLOSE;
  const headerLabel = isViewMode
    ? getFullName(contact)
    : isMainMode
      ? title[mode][category]
      : title[mode];
  const actionButtonProps = isViewMode ? {
    onClick: () => 'action'
  } : {
    to: '/'
  };

  return (
    <header className={classNames(style.header, customClass)}>
      <Button
        customClass={style.burgerButtonWrapper}
        onClick={() => handleMobileMenu()}
        view={BUTTON_ICON}
      >
        <Icon name={ICON_BURGER} />
      </Button>

      <h2 className={style.title}>
        {headerLabel}
      </h2>

      {
        !isMainMode && (
          <Button
            view={BUTTON_ICON}
            {...actionButtonProps}
          >
            <Icon name={actionButtonIconName} />
          </Button>
        )
      }
    </header>
  );
};

Header.propTypes = {
  category: PropTypes.string,
  contact: PropTypes.object,
  customClass: PropTypes.string,
  handleMobileMenu: PropTypes.func,
  mode: PropTypes.string,
  title: PropTypes.object
};

Header.defaultProps = {
  category: null,
  contact: null,
  customClass: null,
  handleMobileMenu: null,
  mode: null,
  title: null
};

const mapStateToProps = state => ({
  category: state.category,
  contact: state.contact,
  mode: state.mode,
  title: state.header
});

export default connect(mapStateToProps)(Header);
