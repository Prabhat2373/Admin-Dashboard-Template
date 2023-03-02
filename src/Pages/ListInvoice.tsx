import React from 'react';
import Page from '../components/Page';
import TaskCard from '../components/TaskCard';
import InputField from '../components/InputField';

export const ListInvoice = () => {
  return (
    <>
      <Page
        pageName="Invoice"
        hideSearch={false}
        navButtonName="Back"
        content={
          <>
            <div className="grid grid-cols-4 gap-5">
              <TaskCard
                content={<h1>Hello World</h1>}
                name="tasks"
                title="Taskkk"
              />{' '}
              <TaskCard
                content={<h1>Hello World</h1>}
                name="tasks"
                title="Taskkk"
              />{' '}
              <TaskCard
                content={<h1>Hello World</h1>}
                name="tasks"
                title="Taskkk"
              />{' '}
              <TaskCard
                content={<h1>Hello World</h1>}
                name="tasks"
                title="Taskkk"
              />{' '}
              <TaskCard
                content={<h1>Hello World</h1>}
                name="tasks"
                title="Taskkk"
              />{' '}
              <TaskCard
                content={<h1>Hello World</h1>}
                name="tasks"
                title="Taskkk"
              />
            </div>
          </>
        }
      />
    </>
  );
};
