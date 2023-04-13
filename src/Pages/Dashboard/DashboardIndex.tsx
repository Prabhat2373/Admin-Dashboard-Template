import React from "react";
import Page from "../../Layout/Page";
import StatsCard from "./Stats/StatsCard";
import HeartIcon from "../../illustrations/icons/HeartIcon";
import BarChart from "../../components/Charts/BarChart";
import PieChartComp from "../../components/Charts/PieChart";
import Card from "../../components/Cards/Card";
import DropDownMenu from "../../components/Popups/DropDownMenu";
import DotMenuIcon from "../../illustrations/icons/DotMenuIcon";
import DataTable from '../../components/Table/DataTable';
import ProductFeaturedCard from '../../components/Cards/ProductFeaturedCard';

import InputField from '../../components/Forms/InputField';
import RoundPieChart from '../../components/Charts/RoundPieChart';
import FORM from '../../components/Forms/Form';

const DashboardIndex = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

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

  const StatsInfo = [
    {
      sales: 123,
      product: 'Inventory',
    },
    {
      sales: 1233,
      product: 'foreign',
    },
    {
      sales: 2323,
      product: 'stock',
    },
    {
      sales: 3236,
      product: 'product',
    }
  ]
  const TopSellingProducts = [
    {
      image: require('../../assets/images/user-profile.png'),
      title: 'Title 1',
      ratings: 4,
      price: 2000
    }, {
      image: require('../../assets/images/user-profile.png'),
      title: 'Title 2',
      ratings: 4,
      price: 1000
    }
  ]
  return (
    <React.Fragment>
      <Page
        hideSearch={true}
        navBtnVarient="primary"
        navButtonName="random"
        onNavbuttonClick={() => console.log("cllll")}
        pageName="Dashboard"
        className={'py-4'}
        hasRightMenu
        topRightMenu={<>
          <div>
            <FORM initialValues={{
              date: '17/03/2023'
            }}
              validationSchema={{}}
              onSubmit={() => {
                console.log('')
              }}>
              <InputField name='date' label='' type='date' />
            </FORM>
          </div>
        </>}
      >
        <div>
          <div className="grid grid-columns-4 gap-5 my-5 text-center ">
            {StatsInfo?.map((element) => {
              return (
                <>
                  <StatsCard
                    title={`${element?.sales} +`}
                    subtitle={element?.product}
                    content="random"
                    cardIcon={<HeartIcon />}
                  />
                </>
              )
            })}
          </div>

          <div className="chart-container flex flex-col md:grid md:grid-cols-5 gap-5">
            <div className="md:col-span-3 grid">
              <Card title="Reports">
                <BarChart
                  data={data}
                  xAxisDataKey="name"
                  yAxisDataKey="value"
                  barFill="red"
                  background={"blue"}
                />
              </Card>
            </div>
            <div className="pie md:col-span-2 grid">
              <Card
                dropdown={
                  <DropDownMenu
                    menuOptions={[{ title: "View" }, { title: "Demo" }]}
                    menuIcon={<DotMenuIcon />}
                    menuTitle=""
                  />
                }
                title="Analytics"
              >
                <RoundPieChart />
              </Card>
            </div>
            <div className='col-span-3'>
              <Card title='Recent Orders'>
                <DataTable columns={columns} data={users} hidePagination />
              </Card>
            </div>
            <div className='col-span-2'>
              <Card title='Top Selling Products'>
                <div className="flex flex-col w-full gap-5 ">
                  {TopSellingProducts?.map((element) => {
                    return (
                      <>
                        <ProductFeaturedCard image={element?.image} price={element?.price} ratings={element?.ratings} title={element?.title} />
                      </>
                    )
                  })}
                </div>
              </Card>
            </div>
          </div>

        </div>
      </Page>
    </React.Fragment>
  );
};

export default DashboardIndex;
