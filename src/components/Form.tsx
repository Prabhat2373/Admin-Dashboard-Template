import { Field, Form, Formik, FormikProps, FormikValues } from 'formik';
import React, { ReactNode } from 'react';

interface FormProps<FormikProps> {
  initialValues: FormikValues;
  onSubmit: (values: FormikValues) => void;
  validationSchema: any;
  children: ReactNode;
}

function FORM<FormikValues>({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: FormProps<FormikValues>) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <Form>{children}</Form>}
    </Formik>
  );
}

export default FORM;
