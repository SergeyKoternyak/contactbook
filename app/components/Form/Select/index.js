// Global
import React from 'react';
// import classNames from 'classnames';

// Styles
import style from './select.scss';

// Help
import { openDropdownToTop } from '../../../helpers';

class Select extends React.Component {
  constructor({ selected }) {
    super({ selected });

    this.state = {
      isOpen: false,
      selectedItem: selected
    };

    this.selectItem = this.selectItem.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  toggleDropdown() {
    const { isOpen } = this.state;
    if (isOpen) {
      this.setState({
        isOpen: false
      });
    } else {
      this.setState({
        isOpen: true
      }, () => {
        this.setState({
          toTop: openDropdownToTop(this.label, this.dropdown)
        });
      });
    }
  }

  hideDropdown() {
    this.setState({
      isOpen: false
    });
  }

  selectItem(e, item) {
    e.stopPropagation();

    this.setState({
      isOpen: false,
      selectedItem: item
    });
  }

  render() {
    const {
      items,
      label
    } = this.props;

    const {
      isOpen,
      selectedItem,
      toTop
    } = this.state;

    return (
      <div
        className={style.root}
        onBlur={this.hideDropdown}
        onClick={this.toggleDropdown}
        onKeyPress={this.toggleDropdown}
        ref={el => (this.label = el)}
        role='listbox'
        tabIndex='0'
      >
        {label}
        <div className={style.field}>
          {selectedItem}
        </div>

        {
          isOpen && (
            <div
              className={`${style.dropdown} ${toTop ? style.top : ''}`}
              ref={el => (this.dropdown = el)}
            >
              {
                items.map(item => (
                  <div
                    key={item}
                    onClick={e => this.selectItem(e, item)}
                    onKeyPress={e => this.selectItem(e, item)}
                    className={style.dropdownItem}
                    role='listitem'
                  >
                    {item}
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    );
  }
}

export default Select;
