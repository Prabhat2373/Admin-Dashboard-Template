import React, { useState } from 'react';
import Page from '../Layout/Page';
import InputField from '../components/Forms/InputField';
import FORM from '../components/Forms/Form';
import * as Yup from 'yup';
import Button from '../components/Buttons/Button';
import Modal from '../components/Modals/Modal';
import TabButtons from '../components/Buttons/TabButtons';
import CrossIcon from '../icons/CrossIcon';
import TaskCard from '../components/Cards/TaskCard';
import AutocompleteField from '../components/Forms/AutocompleteField';
import { FormikValues } from 'formik';
import Offcanvas from '../components/Modals/Offcanvas';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const TestPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCanvasOpen, setISCanvasOpen] = useState(false);
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
    <React.Fragment>
      <Page
        onNavbuttonClick={() => console.log('TEST 2')}
        navBtnVarient="disabled"
        navBtuIcon={<CrossIcon />}
        pageName="Test"
        hideSearch={true}
        navButtonName="Test"
        topRightMenu={
          <>
            <FORM
              children={
                <>
                  <AutocompleteField
                    defaultSelected={[{ label: 'value1', value: 'value1' }]}
                    isMulti={false}
                    label="something"
                    name="something"
                    options={[
                      { label: 'value1', value: 'value1' },
                      { label: 'value2', value: 'value2' },
                    ]}
                  />
                </>
              }
              initialValues={initialValues}
              onSubmit={() => console.log('inputed')}
              validationSchema={validationSchema}
            />
          </>
        }
      >
        <>
          <TabButtons />
          <FORM
            children={
              <React.Fragment>
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
              </React.Fragment>
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
          {/* <DropDownMenu
              menuOptions={[
                { title: "Edit" },
                { title: "add" },
                { title: "Update" },
              ]}
              menuTitle="..."
            /> */}
          <Button
            name="Opan Offcanvas"
            varient="secondary"
            onClick={() => setISCanvasOpen((prev) => !prev)}
          />
          {isCanvasOpen && (
            <Offcanvas isOpen={isCanvasOpen} setIsOpen={setISCanvasOpen} />
          )}
          <TaskCard
            content={
              <>
                <h1>Hello</h1>
              </>
            }
            name="hello"
            title="sdjfsd"
            hasDropdown={true}
            dropDownOptions={[{ title: 'edit' }, { title: 'add' }]}
            dropdownTitle={'...'}
          />
        </>
      </Page>
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
    </React.Fragment>
  );
};

export default TestPage;
