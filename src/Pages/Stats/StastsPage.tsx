import React from "react";
import HeartIcon from "../../illustrations/icons/HeartIcon";
import Page from "../../Layout/Page";
import StatsComponent from "../Dashboard/Stats/StatsCard";

export const StastsPage = () => {
  return (
    <>
      <Page
        navBtnVarient="danger"
        onNavbuttonClick={() => console.log("clicked")}
        pageName="StastsPage"
        hideSearch={true}
        navButtonName="Back"
      >
        <div className="flex gap-10">
          <StatsComponent
            cardIcon={<HeartIcon />}
            title="200+"
            subtitle="Save Products"
            content=""
          />
          <StatsComponent
            cardIcon={<HeartIcon />}
            title="200+"
            subtitle="Save Products"
            content=""
          />
          <StatsComponent
            cardIcon={<HeartIcon />}
            title="200+"
            subtitle="Save Products"
            content=""
          />
        </div>
      </Page>
    </>
  );
};
