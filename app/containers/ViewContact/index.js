import React from 'react';
import { connect } from 'react-redux';

import {
  setContact,
  setMode
} from '../../actions';

import { MODE_VIEW } from '../../constants/modeTypes';

const ViewContact = ({
  contact,
  match,
  setContactAction,
  setModeAction
}) => {
  setModeAction(MODE_VIEW);
  setContactAction(match.params.id);
  return (
    <h1>{match ? `${contact.surname} ${contact.name}` : 'Profile'}</h1>
  );
};

const mapStateToProps = state => ({
  contact: state.contact
});

const mapDispatchToProps = dispatch => ({
  setContactAction: id => dispatch(setContact(id)),
  setModeAction: mode => dispatch(setMode(mode))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewContact);
