import React from 'react';
import DataTable from '../../components/Table/DataTable';

const UsersTable = () => {
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
              className={`${
                row?.original?.status === 'active'
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
  return (
    <React.Fragment>
      <DataTable columns={columns} data={users} />
    </React.Fragment>
  );
};

export default UsersTable;
