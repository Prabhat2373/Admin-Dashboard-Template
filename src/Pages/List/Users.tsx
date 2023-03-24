import React from "react";
import SearchBar from "../../components/SearchBar";
import DataTable from "../../components/Table/DataTable";
import Page from "../../Layout/Page";

const Users = () => {
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
              className={`${
                row?.original?.status === "active"
                  ? "bg-primary-lightGreen"
                  : "bg-primary-pink"
              } rounded-3xl py-2 px-3 text-white`}
            >
              {row?.original?.status}
            </span>
          </>
        );
      },
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }: any) => {
        return (
          <>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#60a5fa"
                className="w-5 h-5 text-teal-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 stroke-red"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>

              <div className="" onClick={() => {}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#ef4444"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </div>
          </>
        );
      },
    },
  ];

  const users: User[] = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "pending",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "john.sdfsmith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
    {
      id: 1,
      name: "John Smith",
      email: "johnsdf.smith@example.com",
      role: "react developer",
      skill: "javascript",
      status: "active",
    },
  ];
  return (
    <>
      <Page
        navBtnVarient="primary"
        onNavbuttonClick={() => console.log("clicked")}
        pageName="Users"
        hideSearch={false}
        navButtonName="Back"
        hasRightMenu={true}
      >
        <div>
          <DataTable columns={columns} data={users} />
        </div>
      </Page>
    </>
  );
};

export default Users;
