import { ListInvoice } from '../Pages/ListInvoice';
import Test2 from '../Pages/Test2';
import TestPage from '../Pages/TestPage';
import Layout from '../Layout/Layout';

export const RouteList = [
  {
    path: '/',
    element: <Layout child={<TestPage />} />,
  },
  {
    path: '/test',
    element: <Layout child={<ListInvoice />} />,
  },
  {
    path: '/test2',
    element: <Layout child={<Test2 />} />,
  },
];
