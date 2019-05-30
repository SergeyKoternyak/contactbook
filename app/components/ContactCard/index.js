// Global
import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import classNames from 'classnames';

// Styles
import style from './contactCard.scss';

// Components
import Avatar from '../Avatar';
import Button from '../Button';
import Icon from '../Icon';

// Constants
import { BUTTON_ICON } from '../../constants/buttonTypes';
import { ICON_ACTIONS } from '../../constants/iconNames';
import { PATH_CONTACT } from '../../constants/pathNames';

// Helpers
import { getFullName } from '../../helpers';

const ContactCard = ({
  id,
  information,
  ...contact
}) => {
  const contactButtonClasses = classNames(
    style.contactButton,
    { [style.partView]: !information }
  );

  return (
    <div className={style.card}>
      <Link
        className={contactButtonClasses}
        to={`${PATH_CONTACT}${id}`}
      >
        <Avatar
          customClass={style.avatar}
          src={contact.avatar}
        />

        <span className={style.fullName}>
          {getFullName(contact)}
        </span>

        {
          information && (
            <span className={style.info}>
              {information}
            </span>
          )
        }
      </Link>

      <Button
        customClass={style.actionButton}
        view={BUTTON_ICON}
      >
        <Icon name={ICON_ACTIONS} />
      </Button>
    </div>
  );
};

/* Button.defaultProps = {
  information: null
};

Button.propTypes = {
  id: PropTypes.string,
  information: PropTypes.string
}; */

export default ContactCard;
