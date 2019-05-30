// Global
import React from 'react';

// Styles
import style from './menu.scss';

const Menu = ({
  children,
  data: {
    name,
    label,
    items
  },
  handleSidebarMenu,
  isShow
}) => (
  <>
    <button
      className={style.buttonLabel}
      onClick={() => handleSidebarMenu(name)}
      type='button'
    >
      {label}
    </button>
    {
      isShow && (
        <div className={style.itemsBox}>
          {
            items.map(item => (
              React.cloneElement(children, {
                key: item.id,
                ...item
              })
            ))
          }
        </div>
      )
    }
  </>
);

export default Menu;
