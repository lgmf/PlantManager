import React from 'react';
import * as yup from 'yup';

import { Formik } from 'formik';

import { Button, Form, TextInput } from '../design-system/components';

const UserFormSchema = yup.object().shape({
  name: yup.string().required('campo obrigatório'),
});

function UserForm({ form, onSubmit }) {
  return (
    <Formik
      initialValues={form}
      validationSchema={UserFormSchema}
      onSubmit={onSubmit}
      validateOnChange
    >
      {
        ({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
        }) => (
          <Form.Form>
            <Form.Controls>
              <TextInput
                placeholder="Digite um nome"
                value={values.name}
                touched={touched}
                error={errors.name}
                onChange={handleChange('name')}
              />
            </Form.Controls>

            <Form.Actions>
              <Button onPress={handleSubmit}>
                Confirmar
              </Button>
            </Form.Actions>
          </Form.Form>
        )
      }
    </Formik>
  );
}

export default UserForm;
