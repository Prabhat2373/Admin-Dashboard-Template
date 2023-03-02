import { ListInvoice } from '../Pages/ListInvoice';
import TestPage from '../Pages/TestPage';
import Layout from '../components/Layout';

export const RouteList = [
  {
    path: '/',
    element: <Layout child={<TestPage />} />,
  },
  {
    path: '/test',
    element: <Layout child={<ListInvoice />} />,
  },
];
