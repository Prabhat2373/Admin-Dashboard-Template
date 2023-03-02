import React from 'react';
import Page from '../components/Page';

const Test2 = () => {
  return (
    <>
      <Page
        content={<div>Test2</div>}
        hideSearch
        navButtonName="back"
        pageName="Test"
        navBtnVarient='disabled'
        onNavbuttonClick={()=> console.log("TEST PAGE")}
      />
    </>
  );
};

export default Test2;
