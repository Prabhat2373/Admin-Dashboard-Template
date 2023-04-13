import React from "react";
import DataTable from "../../components/Table/DataTable";
import Page from "../../Layout/Page";
import DropDownMenu from '../../components/Popups/DropDownMenu';
import DotMenuIcon from '../../illustrations/icons/DotMenuIcon';
import PlusIcon from '../../illustrations/icons/PlusIcon';
import Offcanvas from '../../components/Modals/Offcanvas';

import InputField from '../../components/Forms/InputField';
import { CameraIcon } from '@heroicons/react/24/outline';
import { users } from '../../__mocks__/UsersData';
import Button from '../../components/Buttons/Button';
import FORM from '../../components/Forms/Form';

const Users = () => {


  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Role",
      accessor: "role",
    },
    {
      Header: "Skill",
      accessor: "skill",
    },
    {
      Header: "status",
      accessor: "status",
      Cell: ({ row }: any) => {
        return (
          <>
            <span
              className={`badge ${row?.original?.status === "active"
                ? "bg-primary-lightGreen text-dark-green"
                : "bg-primary-pink text-primary-pink"
                } rounded-3xl py-2 px-3 text-white`}
            >
              {row?.original?.status}
            </span>
          </>
        );
      },
    },
    {
      Header: "actions",
      accessor: "actions",
      Cell: ({ row }: any) => {
        return (
          <>
            <DropDownMenu menuOptions={[
              { title: 'Edit' },
              { title: 'Delete' }
            ]} menuTitle='...' menuIcon={<DotMenuIcon />} />
          </>
        );
      },
    },
  ];

  const [selected, setSelected] = React.useState<any>([]);

  const [open, setOpen] = React.useState<boolean>(false)
  console.log('selectedItem', selected)

  return (
    <>
      <Page
        navBtnVarient="primary"
        onNavbuttonClick={() => console.log("clicked")}
        pageName="Users"
        hideSearch
        navButtonName="Back"
        hasRightMenu={true}
        topRightMenu={<>
          <div>
            <Button name='Add User' varient='primary' icon={<PlusIcon />} onClick={() => setOpen((prev) => !prev)} />
          </div>
        </>}
      >
        <div>
          <DataTable columns={columns} data={users} hasCheckBox setSelectedRows={setSelected} onRowClick={() => console.log('clicked on row')} />
        </div>
      </Page>
      <Offcanvas isOpen={open} setIsOpen={setOpen} title='Add User'>
        <>
          <FORM initialValues={{}} onSubmit={() => {
            console.log('SUBMITTT')
          }} validationSchema={{}}>
            <div>
              <div className='flex justify-center items-center my-6'>
                <label htmlFor="file_input">
                  <input type="file" id='file_input' className='hidden' />
                  <div className='p-12 bg-primary-bgPrimary rounded-full cursor-pointer'>
                    <CameraIcon width={'20px'} hanging={20} />
                  </div>
                </label>
              </div>
              <div>
                <InputField label='First Name' name='first_name' type='text' />
              </div>
              <div>
                <InputField label='Last Name' name='last_name' type='text' />
              </div>
              <div>
                <InputField label='Email' name='email' type='email' />
              </div>
              <div>
                <InputField label='Phone' name='phone' type='number' />
              </div>
              <div>
                <Button name='Add User' varient='primary' />
              </div>
            </div>
          </FORM>
        </>
      </Offcanvas>
    </>
  );
};

export default Users;
