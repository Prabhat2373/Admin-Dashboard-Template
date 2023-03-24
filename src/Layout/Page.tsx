import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface PageProps {
  pageName: string;
  hideSearch: boolean;
  backBtn?: any;
  navButtonName: string;
  navBtuIcon?: any;
  navBtnVarient: 'primary' | 'secondary' | 'danger' | 'disabled';
  hasRightMenu?: boolean;
  topRightMenu?: any;
  onNavbuttonClick: () => void;
  children: ReactNode;
  className?: any
}
const Page = ({
  pageName,
  hideSearch,
  navBtuIcon,
  navButtonName,
  hasRightMenu,
  // content,
  navBtnVarient,
  onNavbuttonClick,
  topRightMenu,
  children,
  className
}: PageProps) => {
  return (
    <>
      <div className={`absolute right-0 h-full w-full bg-primary-bgPrimary ${!!className && className}`}>
        <Navbar
          onClick={onNavbuttonClick}
          buttonName={navButtonName}
          hideSearch={hideSearch}
          name={pageName}
          buttonIcon={navBtuIcon}
          buttonVarient={navBtnVarient}
          topRightMenu={topRightMenu}
          hasRightMenu={hasRightMenu}
        />
        <div className="content ml-32 mr-4 py-8">{children}</div>
      </div>
    </>
  );
};

export default Page;
