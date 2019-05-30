import ReactDOM from 'react-dom';
import moment from 'moment';

// Map helpers
export const cloneMap = data => {
  const newMap = new Map();
  data.forEach((value, key) => newMap.set(key, value));
  return newMap;
};

export const addContact = (originMap, contact) => cloneMap(originMap).set(contact.id, contact);

export const removeContact = (originMap, contactId) => {
  originMap.delete(contactId);
  return cloneMap(originMap);
};

export const getFullName = ({ name, surname }) => (surname ? `${surname} ${name}` : name);

export const getBirthtdayToday = (contacts, birthdayIds) => {
  const currentYear = moment().year();

  return birthdayIds.map(id => {
    const contact = contacts.get(id);

    return {
      age: currentYear - moment(contact.birthday).year(),
      birthday: contact.birthday,
      id: contact.id,
      name: contact.name,
      surname: contact.surname
    };
  });
};

export const mapToArray = Map => ([...Map.keys()].map(item => Map.get(item)));

export const getFormData = form => (
  Array
    .from(new window.FormData(form).entries())
    .reduce((prev, field) => ({
      ...prev,
      [field[0]]: field[1]
    }), {})
);

export const openDropdownToTop = ($button, $dropdown) => (
  document.documentElement.clientHeight < (
    ReactDOM.findDOMNode($button).getBoundingClientRect().bottom
    + ReactDOM.findDOMNode($dropdown).getBoundingClientRect().height + 8
  )
);

export const fromObjArrToMapBy = (arr, prop) => (
  new Map(arr.map(item => [item[prop], item]))
);

// window.getComputedStyle(document.documentElement).getPropertyValue('--color-font-general');
