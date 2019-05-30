// Global
import React from 'react';
// import classNames from 'classnames';

// Styles
import style from './select.scss';

// Help
import { openDropdownToTop } from '../../../helpers';

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedItem: this.props.selected
    };

    this.selectItem = this.selectItem.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  toggleDropdown() {
    if (this.state.isOpen) {
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

    return (
      <label
        className={style.root}
        onClick={this.toggleDropdown}
        ref={el => (this.label = el)}
      >
        {label}
        <div className={style.field}>
          {this.state.selectedItem}
        </div>

        {
          this.state.isOpen && (
            <div
              className={`${style.dropdown} ${this.state.toTop ? style.top : ''}`}
              ref={el => (this.dropdown = el)}
            >
              {
                items.map((item, index) => (
                  <div
                    key={item}
                    onClick={e => this.selectItem(e, item)}
                    className={style.dropdownItem}
                    {...(index === 0 || autofocus)}
                  >
                    {item}
                  </div>
                ))
              }
            </div>
          )
        }
      </label>
    );
  }
}

export default Select;
