import React from 'react';
import * as yup from 'yup';

import { Formik } from 'formik';

import { Button, Form, TextInput } from '../../design-system/components';

const timePattern = /[\d]{2}:[\d]{2}/;

const PlantsNotificationFormSchema = yup.object().shape({
  notificationTime: yup
    .string()
    .matches(timePattern, 'formato inválido')
    .required('campo obrigatório'),
});

function PlantsNotificationForm({ form, onSubmit }) {
  return (
    <Formik
      initialValues={form}
      validationSchema={PlantsNotificationFormSchema}
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
                label="Informe o melhor horário para ser lembrado:"
                placeholder="hh:mm"
                value={values.notificationTime}
                touched={touched}
                error={errors.notificationTime}
                onChange={handleChange('notificationTime')}
              />
            </Form.Controls>

            <Form.Actions>
              <Button onPress={handleSubmit}>
                Cadastrar planta
              </Button>
            </Form.Actions>
          </Form.Form>
        )
      }
    </Formik>
  );
}

export default PlantsNotificationForm;
