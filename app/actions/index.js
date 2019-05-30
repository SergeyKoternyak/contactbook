import {
  CREATE_CONTACT,
  REMOVE_CONTACT,
  SET_CATEGORY,
  SET_CONTACT,
  SET_MODE,
  SET_SIDEBAR_ACTIVE_MENU,
  TOGGLE_MOBILE_MENU,
  UPDATE_CONTACT
} from '../constants/actionTypes';

export const createContact = contact => ({
  type: CREATE_CONTACT,
  contact
});

export const removeContact = id => ({
  type: REMOVE_CONTACT,
  id
});

export const setCategory = category => ({
  type: SET_CATEGORY,
  category
});

export const setContact = id => ({
  type: SET_CONTACT,
  id
});

export const setMode = mode => ({
  type: SET_MODE,
  mode
});

export const setSidebarActiveMenu = menuName => ({
  type: SET_SIDEBAR_ACTIVE_MENU,
  menuName
});

export const toggleMobileMenu = () => ({
  type: TOGGLE_MOBILE_MENU
});

export const updateContact = id => ({
  type: UPDATE_CONTACT,
  id
});
