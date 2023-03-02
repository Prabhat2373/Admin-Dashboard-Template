import React from 'react';
import Navbar from './Navbar';
import TaskCard from './TaskCard';

interface PageProps {
  pageName: string;
  hideSearch: boolean;
  backBtn?: any;
  navButtonName: string;
  content:JSX.Element;
}
const Page = ({ pageName, hideSearch, backBtn, navButtonName, content }: PageProps) => {
  return (
    <>
      <div className="absolute right-0 h-full w-full bg-primary-bgPrimary">
        <Navbar
          buttonName={navButtonName}
          hideSearch={hideSearch}
          name={pageName}
        />
        <div className="content mx-32">
          {content}
        </div>
      </div>
    </>
  );
};

export default Page;
