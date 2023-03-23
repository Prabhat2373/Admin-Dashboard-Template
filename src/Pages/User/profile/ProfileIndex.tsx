import React from 'react';
import Page from '../../../Layout/Page';
import FORM from '../../../components/Forms/Form';
import InputField from '../../../components/Forms/InputField';
import AutocompleteField from '../../../components/Forms/AutocompleteField';
import Button from '../../../components/Buttons/Button';
import UsersTable from '../UsersTable';
import { ProfileFormValidationSchema } from '../../../validations/Validations';

const initialValues = {
  name: '',
  email: '',
  contact: '',
  address: '',
  country: '',
  state: '',
};

const ProfileIndex = () => {
  const [isEditing, setIsEditing] = React.useState(true);
  return (
    <React.Fragment>
      <Page
        pageName="Profile"
        hideSearch={true}
        navBtnVarient="primary"
        onNavbuttonClick={() => console.log('clicked on profile')}
        navButtonName="Edit Profile"
      >
        <FORM
          initialValues={initialValues}
          validationSchema={ProfileFormValidationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            <div className="bg-white rounded-md flex flex-col items-start   h-full p-5">
              <div>
                <h1 className="text-lg font-medium ">User Details</h1>
                <div>
                  <img
                    src={require('../../../assets/images/user-profile.png')}
                    alt="user profile"
                    width={'100px'}
                  />
                </div>
                {!isEditing ? (
                  <div className="flex flex-col gap-4 p-5">
                    <div>
                      <div className="flex flex-col text-lg ">
                        Name :
                        <span className="border-b text-start border-black border-opacity-5 py-2 mb-2 font-medium">
                          Name Name
                        </span>
                      </div>
                      <div className="flex flex-col text-lg ">
                        Email :
                        <span className="border-b text-start border-black border-opacity-5 py-2 mb-2 font-medium">
                          Email
                        </span>
                      </div>
                      <div className="flex flex-col text-lg ">
                        Contact :
                        <span className="border-b text-start border-black border-opacity-5 py-2 mb-2 font-medium">
                          contact
                        </span>
                      </div>
                      <div className="flex flex-col text-lg ">
                        Address :
                        <span className="border-b text-start border-black border-opacity-5 py-2 mb-2 font-medium">
                          Address
                        </span>
                      </div>
                      <div>
                        <Button
                          name="Edit Profile"
                          varient="primary"
                          onClick={() => {
                            setIsEditing((prev) => !prev);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <InputField
                      label="Name"
                      name="name"
                      type="text"
                      className={'border border-black border-opacity-50'}
                    />

                    <InputField
                      label="Email"
                      name="email"
                      type="email"
                      className={'border border-black border-opacity-50'}
                    />
                    <InputField
                      label="Contact"
                      name="contact"
                      type="number"
                      className={'border border-black border-opacity-50'}
                    />
                    <InputField
                      label="Address"
                      name="address"
                      type="text"
                      className={'border border-black border-opacity-50'}
                    />

                    <InputField
                      label="Country"
                      name="country"
                      type="text"
                      className={'border border-black border-opacity-50'}
                    />

                    <AutocompleteField
                      defaultSelected={[{ label: 'state', value: 'usa' }]}
                      isMulti={false}
                      label="State"
                      name="state"
                      options={[
                        { label: 'usa', value: 'usa' },
                        { label: 'ind', value: 'ind' },
                      ]}
                    />

                    <Button
                      name="Update Profile"
                      varient="primary"
                      type="submit"
                      // onClick={() => {
                      //   setIsEditing((prev) => !prev);
                      // }}
                      className={'mt-4'}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="col-span-2 bg-white ">
              <div className="">
                <UsersTable />
              </div>
            </div>
          </div>
        </FORM>
      </Page>
    </React.Fragment>
  );
};

export default ProfileIndex;
