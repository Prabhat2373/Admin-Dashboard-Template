import React from 'react';

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
        <span className="bg-primary-bgPrimary rounded-full p-8">
          {cardIcon}
        </span>
        <div className="pt-6">
          <h1 className="text-2xl font-bold">{title}</h1>
          <h2 className="">{subtitle}</h2>
        </div>
      </div>
    </>
  );
}

export default StatsCard;
