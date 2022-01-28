import React, { useReducer } from 'react';
import { TextField } from '@mui/material';

import './Contact.css';

// import MessageStatusModal from './MessageStatusModal';
import Button from '../../components/Button/Button';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const initialErrors = {
  name: false,
  email: false,
  message: false,
};

const Contact = () => {
  const reducer = (currentState, nextState) => ({
    ...currentState,
    ...nextState,
  });

  const [values, setValues] = useReducer(reducer, initialValues);
  const [errors, setErrors] = useReducer(reducer, initialErrors);
  // const [isModalOn, setIsModalOn] = useState(false);

  const onChange = ({ target }) => {
    setValues({ [target.id]: target.value });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (values.name.trim() === '') {
      setErrors({ name: true });
      return;
    } else {
      setErrors({ name: false });
    }

    const reg =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!String(values.email).toLowerCase().match(reg)) {
      setErrors({ email: true });
      return;
    } else {
      setErrors({ email: false });
    }

    if (values.message.length < 10) {
      setErrors({ message: true });
      return;
    } else {
      setErrors({ message: false });
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': e.target.getAttribute('name'),
        ...values,
      }),
    })
      .then(() => {
        for (let key in values) {
          setValues({ [key]: '' });
        }

        // setIsModalOn(true);
      })
      .catch((e) => console.log('Error: ', e));
  };

  return (
    <section className='contact-page-ctr'>
      <h1>Contact</h1>
      <form
        className='contact-form'
        onSubmit={onSubmit}
        name='contact'
        method='POST'
        data-netlify='true'>
        <input type='hidden' name='form-name' value='contact' />
        <TextField
          id='name'
          label='Name'
          variant='filled'
          margin='none'
          size='small'
          fullWidth
          onChange={onChange}
          error={errors.name}
          value={values.name}
          helperText={errors.name ? 'This field cannot be empty' : ''}
        />
        <TextField
          id='email'
          label='E-Mail'
          variant='filled'
          margin='none'
          size='small'
          fullWidth
          onChange={onChange}
          error={errors.email}
          value={values.email}
          helperText={errors.email ? 'Must be a valid e-mail' : ''}
        />
        <TextField
          id='message'
          label='Message'
          variant='filled'
          margin='none'
          size='small'
          multiline
          rows={4}
          fullWidth
          onChange={onChange}
          error={errors.message}
          value={values.message}
          helperText={
            errors.message ? 'Message must be at least 10 characters long' : ''
          }
        />
        <Button type='submit' value='Send Message' />
      </form>
      {/* <MessageStatusModal isModalOn={isModalOn} setIsModalOn={setIsModalOn} /> */}
    </section>
  );
};

export default Contact;
