import React from "react";
import Page from "../../Layout/Page";
import StatsCard from "./Stats/StatsCard";
import HeartIcon from "../../icons/HeartIcon";
import BarChart from "../../components/Charts/BarChart";
import PieChartComp from "../../components/Charts/PieChart";
import Card from "../../components/Cards/Card";
import DropDownMenu from "../../components/Popups/DropDownMenu";
import DotMenuIcon from "../../icons/DotMenuIcon";

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
  return (
    <React.Fragment>
      <Page
        hideSearch={true}
        navBtnVarient="primary"
        navButtonName="random"
        onNavbuttonClick={() => console.log("cllll")}
        pageName="Dashboard"
      >
        <div className="grid  grid-cols-4 gap-5 my-5 text-center ">
          <StatsCard
            title="200+"
            subtitle="Save Products"
            content=""
            cardIcon={<HeartIcon />}
          />
          <StatsCard
            title="200+"
            subtitle="Save Products"
            content=""
            cardIcon={<HeartIcon />}
          />
          <StatsCard
            title="200+"
            subtitle="Save Products"
            content=""
            cardIcon={<HeartIcon />}
          />
          <StatsCard
            title="200+"
            subtitle="Save Products"
            content=""
            cardIcon={<HeartIcon />}
          />
        </div>

        <div className="chart-container grid grid-cols-5 gap-5">
          <div className="col-span-3">
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
          <div className="pie col-span-2 ">
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
              <PieChartComp />
            </Card>
          </div>
        </div>
      </Page>
    </React.Fragment>
  );
};

export default DashboardIndex;
