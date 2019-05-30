import React from 'react';
import { connect } from 'react-redux';

import {
  createContact,
  setMode
} from '../../actions';

import Form from '../../components/Form';

import { MODE_CREATE } from '../../constants/modeTypes';

const CreateContact = ({
  createContactAction,
  formMeta,
  setModeAction
}) => {
  setModeAction(MODE_CREATE);
  return (
    <Form
      meta={formMeta}
      onSubmit={contactData => createContactAction(contactData)}
    />
  );
};

const mapStateToProps = state => ({
  formMeta: state.contactForm
});

const mapDispatchToProps = dispatch => ({
  createContactAction: contact => dispatch(createContact(contact)),
  setModeAction: mode => dispatch(setMode(mode))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateContact);
