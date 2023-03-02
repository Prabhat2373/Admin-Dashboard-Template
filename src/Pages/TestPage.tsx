import React, { useState } from 'react';
import Page from '../components/Page';
import InputField from '../components/InputField';
import FORM from '../components/Form';
import * as Yup from 'yup';
import { Form, Formik, FormikValues } from 'formik';
import Button from '../components/Button';
import Modal from '../components/Modal';
import TabButtons from '../components/TabButtons';
import CrossIcon from '../icons/CrossIcon';
import DropDownMenu from '../components/DropDownMenu';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const TestPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });
  const handleSubmit = (values: FormikValues) => {
    console.log(values);
  };
  return (
    <>
      <Page
        onNavbuttonClick={() => console.log('TEST 2')}
        navBtnVarient="disabled"
        navBtuIcon={<CrossIcon />}
        pageName="Test"
        hideSearch={true}
        navButtonName="Test"
        content={
          <>
            <TabButtons />
            <FORM
              children={
                <>
                  <InputField label="First Name" name="firstName" type="text" />
                  <InputField label="Last Name" name="lastName" type="text" />
                  <InputField label="Email" name="email" type="email" />
                  <Button
                    type="submit"
                    // disabled={isSubmitting}
                    name="Submit"
                    varient="primary"
                    className={'text-center justify-center'}
                  />
                </>
              }
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            ></FORM>
            <Button
              name="Open Modal"
              varient="danger"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            />
            <DropDownMenu
              menuOptions={[
                { title: 'Edit' },
                { title: 'add' },
                { title: 'Update' },
              ]}
              menuTitle="..."
            />
          </>
        }
      />
      {
        <Modal
          child={
            <>
              <h1>Hello World</h1>
            </>
          }
          heading="Modla"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          size="max-w-3xl"
        ></Modal>
      }
    </>
  );
};

export default TestPage;
