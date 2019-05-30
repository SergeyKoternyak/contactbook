import React from 'react';
import { connect } from 'react-redux';

// import InputAvatar from '../../components/Form/InputAvatar';
// import Select from '../../components/Form/Select';
import Avatar from '../../components/Avatar';

import {
  setCategory,
  setMode
} from '../../actions';


const Try = ({
  match: { params: { category } },
  mode,
  setCategoryAction,
  setModeAction
}) => {
  setCategoryAction(category);
  setModeAction(mode);

  return (
    <div>
      <Avatar />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setCategoryAction: category => dispatch(setCategory(category)),
  setModeAction: mode => dispatch(setMode(mode))
});

export default connect(
  null,
  mapDispatchToProps
)(Try);


/* <Select
  items={['all', 'family', 'job', 'fitnes']}
  label='Select'
  selected='Hello'
/> */
