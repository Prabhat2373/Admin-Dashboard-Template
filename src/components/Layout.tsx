import React from 'react';
import { Sidebar } from '../Layout/Sidebar';
// import { Sidebar } from './Sidebar';

const Layout = ({ child }: { child: JSX.Element }) => {
  return (
    <>
      <div className="bg-primary-bgPrimary">
        <Sidebar />
        {child}
      </div>
    </>
  );
};

export default Layout;
