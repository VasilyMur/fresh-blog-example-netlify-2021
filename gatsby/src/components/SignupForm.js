import React from 'react';
import styled from 'styled-components';
import FormStyles from '../styles/FormStyles';
import useForm from '../hooks/useForm';

const SignupForm = () => {
  const {
    values,
    captureInput,
    submitForm,
    isLoading,
    error,
    message,
  } = useForm();

  return (
    <Container>
      <FormStyles onSubmit={submitForm}>
        <input
          disabled={isLoading}
          type="email"
          name="email"
          value={values.email}
          onChange={captureInput}
        />
        <input
          disabled={isLoading}
          type="garbage"
          name="garbage"
          value={values.garbage}
          className="garbage"
          onChange={captureInput}
        />
        <button disabled={isLoading} type="submit">
          {isLoading ? 'Отправляю запрос' : 'Отправить'}
        </button>
      </FormStyles>
      <div>
        {error ? <span className="formError">Ошибка: {error}</span> : ''}
        {message ? <span className="formMessage">{message}</span> : ''}
      </div>
    </Container>
  );
};

export default SignupForm;

const Container = styled.div``;
