// Global
import React from 'react';

// Styles
import style from './form.scss';

// Components
import Input from './Input';

// Helpers
import { getFormData } from '../../helpers';

const Form = ({
  data,
  meta,
  onSubmit
}) => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formData = getFormData(form);

    onSubmit(formData);
    form.reset();
  };

  return (
    <form
      className={style.form}
      onSubmit={e => handleSubmit(e)}
    >
      <section className={style.fieldsWrapper}>
        {
          meta.map(field => (
            <Input
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              value={data ? data[field.name] : ''}
            />
          ))
        }
      </section>

      <button
        className={style.submitButton}
        type='submit'
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
