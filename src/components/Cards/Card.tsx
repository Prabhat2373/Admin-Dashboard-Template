import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  dropdown?: any;
  children: ReactNode;
}
const Card = ({ title, dropdown, children }: CardProps) => {
  return (
    <React.Fragment>
      <div className="bg-white flex flex-col rounded-xl p-5 h-full">
        <div className="top flex justify-between ">
          <h1 className="text-text-primary font-medium text-2xl py-3">{title}</h1>
        <p>{dropdown}</p>
        </div>
        <div className="content flex justify-center items-center h-full w-full">
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
