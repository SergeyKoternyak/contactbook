// Global
import React from 'react';
import classNames from 'classnames';

// Styles
import style from './menuBox.scss';

// Components
import BirthdayItem from '../BirthdayItem';
import CategoryItem from '../CategoryItem';
import Menu from '../Menu';

// Constants
import {
  MENU_BIRTHDAYS,
  MENU_CATEGORIES
} from '../../../constants/menuNames';

const MenuBox = ({
  handleSidebarMenu,
  sidebarMenu: {
    activeMenu,
    dataMenu
  }
}) => {
  const isActiveMenu = menuName => activeMenu === menuName;
  const menuClasses = menuName => classNames(
    style.menu,
    { [style.fullWidth]: menuName === MENU_CATEGORIES },
    { [style.shrink]: !isActiveMenu(menuName) }
  );
  const content = name => {
    switch (name) {
      case MENU_BIRTHDAYS:
        return (
          <BirthdayItem />
        );

      case MENU_CATEGORIES:
        return (
          <CategoryItem />
        );

      default:
        return null;
    }
  };

  return (
    <section className={style.menuBox}>
      {
        dataMenu.map(({ id, name, ...data }) => (
          <div
            className={menuClasses(name)}
            key={id}
          >
            <Menu
              data={{ ...data, name }}
              handleSidebarMenu={handleSidebarMenu}
              isShow={isActiveMenu(name)}
            >
              {content(name)}
            </Menu>
          </div>
        ))
      }
    </section>
  );
};

export default MenuBox;
