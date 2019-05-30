import React from 'react';
import { connect } from 'react-redux';

import style from './mainPage.scss';

import ContactCard from '../../components/ContactCard';

import { MODE_MAIN } from '../../constants/modeTypes';

import {
  setCategory,
  setMode
} from '../../actions';

import { mapToArray } from '../../helpers';

const Contacts = ({
  contacts,
  match: { params: { category } },
  setCategoryAction,
  setModeAction
}) => {
  setCategoryAction(category);
  setModeAction(MODE_MAIN);
  const contactsArr = category === 'all'
    ? mapToArray(contacts)
    : mapToArray(contacts).filter(item => item.category === category);

  return (
    <div className={style.root}>
      {
        contactsArr.map(item => (
          <ContactCard
            key={item.id}
            {...item}
          />
        ))
      }
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts
});

const mapDispatchToProps = dispatch => ({
  setCategoryAction: category => dispatch(setCategory(category)),
  setModeAction: mode => dispatch(setMode(mode))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
