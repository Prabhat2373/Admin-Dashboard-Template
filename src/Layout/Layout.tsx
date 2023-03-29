import React from 'react';
import { Sidebar } from './Sidebar';

const Layout = ({ child }: { child: JSX.Element }) => {
  return (
    <>
      <div className="bg-primary-bgPrimary">
        <Sidebar />
        <div className='child-content ml-28'>
          {child}
        </div>
      </div>
    </>
  );
};

export default Layout;
