import React from 'react';
import Page from '../components/Page';
import DataTable from '../components/Table/DataTable';

const Test2 = () => {
  interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    skill: string;
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
  ];

  const users: User[] = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'react developer',
      skill: 'javascript',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      role: 'react Native developer',
      skill: 'javascript',
    },
  ];
  return (
    <>
      <Page
        content={
          <div>
            <div>
              <h1>Table</h1>
              <DataTable columns={columns} data={users} />
            </div>
          </div>
        }
        hideSearch
        navButtonName="back"
        pageName="Test"
        navBtnVarient="disabled"
        onNavbuttonClick={() => console.log('TEST PAGE')}
      />
    </>
  );
};

export default Test2;
