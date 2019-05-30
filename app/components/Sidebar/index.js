// Global
import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

// Styles
import style from './sidebar.scss';

// Components
import Button from '../Button';
import Icon from '../Icon';
import MenuBox from './MenuBox';
import ProfileCard from './ProfileCard';

// Constants
import { BUTTON_ICON } from '../../constants/buttonTypes';
import { ICON_CLOSE } from '../../constants/iconNames';
import { MODE_CREATE } from '../../constants/modeTypes';
import { PATH_CREATE } from '../../constants/pathNames';

import {
  setSidebarActiveMenu,
  toggleMobileMenu
} from '../../actions';

const Sidebar = ({
  customClass,
  toggleMobileMenuAction,
  setSidebarActiveMenuAction,
  mode,
  sidebar: {
    isOpen,
    ...sidebar
  },
  profile
}) => {
  const isCreateMode = mode === MODE_CREATE;

  return (
    <aside className={classNames(style.sidebar, { [style.open]: isOpen }, customClass)}>
      <header className={style.header}>
        <Button
          customClass={style.closeButton}
          onClick={toggleMobileMenuAction}
          view={BUTTON_ICON}
        >
          <Icon name={ICON_CLOSE} />
        </Button>

        <h1 className={style.title}>
          Contact book
        </h1>
      </header>

      <ProfileCard profile={profile} />

      <MenuBox
        handleSidebarMenu={setSidebarActiveMenuAction}
        sidebarMenu={sidebar}
      />

      <footer className={style.createButtonBox}>
        <Button
          customClass={style.createButton}
          disabled={isCreateMode}
          to={!isCreateMode ? PATH_CREATE : null}
        >
          Create new contact
        </Button>
      </footer>
    </aside>
  );
};

const mapStateToProps = state => ({
  mode: state.mode,
  sidebar: state.sidebar,
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  setSidebarActiveMenuAction: menuName => dispatch(setSidebarActiveMenu(menuName)),
  toggleMobileMenuAction: () => dispatch(toggleMobileMenu())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(Sidebar);
