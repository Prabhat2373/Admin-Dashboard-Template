import React from 'react';
import Navbar from './Navbar';

interface PageProps {
  pageName: string;
  hideSearch: boolean;
  backBtn?: any;
  navButtonName: string;
  navBtuIcon?: any;
  navBtnVarient: 'primary' | 'secondary' | 'danger' | 'disabled';
  content: JSX.Element;
  onNavbuttonClick: () => void;
}
const Page = ({
  pageName,
  hideSearch,
  navBtuIcon,
  navButtonName,
  content,
  navBtnVarient,
  onNavbuttonClick,
}: PageProps) => {
  return (
    <>
      <div className="absolute right-0 h-full w-full bg-primary-bgPrimary">
        <Navbar
          onClick={onNavbuttonClick}
          buttonName={navButtonName}
          hideSearch={hideSearch}
          name={pageName}
          buttonIcon={navBtuIcon}
          buttonVarient={navBtnVarient}
        />
        <div className="content mx-32">{content}</div>
      </div>
    </>
  );
};

export default Page;
