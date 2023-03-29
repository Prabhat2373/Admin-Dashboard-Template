import React from 'react';
import Page from '../Layout/Page';
import TaskCard from '../components/Cards/TaskCard';
import InputField from '../components/Forms/InputField';
import PlusIcon from '../illustrations/icons/PlusIcon';
import DataTable from '../components/Table/DataTable';

export const ListInvoice = () => {
  interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    skill: string;
    status: string;
  }

  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Role',
      accessor: 'role',
    },
    {
      Header: 'Skill',
      accessor: 'skill',
    },
    {
      Header: 'status',
      accessor: 'status',
      Cell: ({ row }: any) => {
        return (
          <>
            <span
              className={`${row?.original?.status === 'active'
                  ? 'bg-primary-lightGreen'
                  : 'bg-primary-pink'
                } rounded-3xl py-2 px-3 text-white`}
            >
              {row?.original?.status}
            </span>
          </>
        );
      },
    },
  ];

  const users: User[] = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'react developer',
      skill: 'javascript',
      status: 'active',
    },
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'react developer',
      skill: 'javascript',
      status: 'pending',
    },
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'react developer',
      skill: 'javascript',
      status: 'active',
    },
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'react developer',
      skill: 'javascript',
      status: 'active',
    },
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'react developer',
      skill: 'javascript',
      status: 'active',
    },
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'react developer',
      skill: 'javascript',
      status: 'active',
    },
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'react developer',
      skill: 'javascript',
      status: 'active',
    },
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'react developer',
      skill: 'javascript',
      status: 'active',
    },
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'react developer',
      skill: 'javascript',
      status: 'active',
    },
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'react developer',
      skill: 'javascript',
      status: 'active',
    },
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'react developer',
      skill: 'javascript',
      status: 'active',
    },
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'react developer',
      skill: 'javascript',
      status: 'active',
    },
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'react developer',
      skill: 'javascript',
      status: 'active',
    },
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'react developer',
      skill: 'javascript',
      status: 'active',
    },
    {
      id: 1,
      name: 'John Smith',
      email: 'john.sdfsmith@example.com',
      role: 'react developer',
      skill: 'javascript',
      status: 'active',
    },
    {
      id: 1,
      name: 'John Smith',
      email: 'johnsdf.smith@example.com',
      role: 'react developer',
      skill: 'javascript',
      status: 'active',
    },
  ];

  // const columns = React.useMemo(
  //   () => [
  //     {
  //       Header: 'Name',
  //       columns: [
  //         {
  //           Header: 'First Name',
  //           accessor: 'firstName',
  //         },
  //         {
  //           Header: 'Last Name',
  //           accessor: 'lastName',
  //         },
  //       ],
  //     },
  //     {
  //       Header: 'Info',
  //       columns: [
  //         {
  //           Header: 'Age',
  //           accessor: 'age',
  //         },
  //         {
  //           Header: 'Visits',
  //           accessor: 'visits',
  //         },
  //         {
  //           Header: 'Status',
  //           accessor: 'status',
  //         },
  //         {
  //           Header: 'Profile Progress',
  //           accessor: 'progress',
  //         },
  //       ],
  //     },
  //   ],
  //   []
  // );

  // const data = React.useMemo(() => makeData(100000), []);

  return (
    <>
      <Page
        onNavbuttonClick={() => console.log('LIST PAGE')}
        navBtnVarient="primary"
        navBtuIcon={<PlusIcon />}
        pageName="Invoice"
        hideSearch={false}
        navButtonName="Back"
      >
        <React.Fragment>
          <div className="grid-columns-4 gap-4">
            <TaskCard
              content={<h1>Hello World</h1>}
              name="tasks"
              title="Taskkk"
            />{' '}
            <TaskCard
              content={<h1>Hello World</h1>}
              name="tasks"
              title="Taskkk"
            />{' '}
            <TaskCard
              content={<h1>Hello World</h1>}
              name="tasks"
              title="Taskkk"
            />{' '}
            <TaskCard
              content={<h1>Hello World</h1>}
              name="tasks"
              title="Taskkk"
            />{' '}
            <TaskCard
              content={<h1>Hello World</h1>}
              name="tasks"
              title="Taskkk"
            />{' '}
            <TaskCard
              content={<h1>Hello World</h1>}
              name="tasks"
              title="Taskkk"
            />
          </div>
          <DataTable columns={columns} data={users} />
        </React.Fragment>
      </Page>
    </>
  );
};
