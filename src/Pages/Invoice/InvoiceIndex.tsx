import React from 'react'
import Page from '../../Layout/Page'
import PlusIcon from '../../illustrations/icons/PlusIcon'
import { useNavigate } from 'react-router-dom'
import DropDownMenu from '../../components/Popups/DropDownMenu'
import DotMenuIcon from '../../illustrations/icons/DotMenuIcon'
import DataTable from '../../components/Table/DataTable'
import { users } from '../../__mocks__/UsersData'

const InvoiceIndex = () => {
    const nav = useNavigate();
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

    return (
        <>
            <Page navBtnVarient='primary' hideSearch={false} navButtonName='Add New' navBtuIcon={<PlusIcon />} pageName='Invoice List' onNavbuttonClick={() => {
                nav('/create-invoice')
            }} hasRightMenu>

                <div>
                    <DataTable columns={columns} data={users} hasCheckBox />
                </div>
            </Page>
        </>
    )
}

export default InvoiceIndex