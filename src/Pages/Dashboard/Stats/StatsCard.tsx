import React from "react";

interface StatsComponentProps {
  title: string;
  subtitle: string;
  content: string;
  cardIcon: any;
}
function StatsCard({ title, subtitle, cardIcon }: StatsComponentProps) {
  return (
    <>
      <div className="bg-white flex items-center justify-evenly p-5 rounded-md gap-5">
        <span className="bg-orange-100 rounded-full p-8">{cardIcon}</span>
        <div className="">
          <h1 className="text-2xl font-bold">{title}</h1>
          <h2 className="">{subtitle}</h2>
        </div>
      </div>
    </>
  );
}

export default StatsCard;
