import {
  CREATE_CONTACT,
  REMOVE_CONTACT,
  SET_CATEGORY,
  SET_CONTACT,
  SET_MODE,
  SET_SIDEBAR_ACTIVE_MENU,
  TOGGLE_MOBILE_MENU
} from '../constants/actionTypes';
import { MENU_CATEGORIES } from '../constants/menuNames';

import {
  addContact,
  fromObjArrToMapBy,
  getBirthtdayToday,
  removeContact
} from '../helpers';

import {
  categoriesMock,
  contactsMock,
  formMock,
  headerMock,
  profileMock
} from '../mockData';

const initialState = {
  category: '',
  contact: {},
  contacts: new Map(),
  contactForm: [...formMock],
  header: { ...headerMock },
  mode: '',
  sidebar: {
    activeMenu: MENU_CATEGORIES,
    dataMenu: [
      {
        id: 'a1',
        items: [...categoriesMock],
        label: 'categories',
        name: 'categories'
      },
      {
        id: 'a2',
        items: [],
        label: 'birthday today',
        name: 'birthdays'
      }
    ],
    isOpen: false
  },
  profile: { ...profileMock }
};

initialState.contacts = fromObjArrToMapBy(contactsMock, 'id');
initialState.sidebar.dataMenu[1].items = getBirthtdayToday(initialState.contacts, ['d4b33a1', 'd4b33a2']);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: addContact(state.contacts, action.contact)
      };

    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: removeContact(state.contacts, action.id)
      };

    case SET_CATEGORY:
      return {
        ...state,
        category: action.category
      };

    case SET_CONTACT:
      return {
        ...state,
        contact: state.contacts.get(action.id)
      };

    case SET_MODE:
      return {
        ...state,
        mode: action.mode
      };

    case SET_SIDEBAR_ACTIVE_MENU:
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          activeMenu: action.menuName
        }
      };

    case TOGGLE_MOBILE_MENU:
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          isOpen: !state.sidebar.isOpen
        }
      };

    default:
      return state;
  }
};

export default reducer;
