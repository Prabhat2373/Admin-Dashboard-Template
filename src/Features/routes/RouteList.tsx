import { ListInvoice } from "../../Pages/ListInvoice";
import Test2 from "../../Pages/Test2";
import TestPage from "../../Pages/TestPage";
import Layout from "../../Layout/Layout";
import { StastsPage } from "../../Pages/Stats/StastsPage";
import LoginForm from "../../components/Forms/LoginForm";
import ProfileIndex from "../../Pages/User/profile/ProfileIndex";
import DashboardIndex from "../../Pages/Dashboard/DashboardIndex";
import RegistrationForm from "../../components/Forms/RegistrationForm";
import ForgotPassword from "../../components/Forms/ForgotPassword";
import ResetPassword from "../../components/Forms/ResetPassword";
import Users from "../../Pages/List/Users";

export const RouteList = [
  {
    path: "/",
    element: <Layout child={<TestPage />} />,
  },
  {
    path: "/test",
    element: <Layout child={<ListInvoice />} />,
  },
  {
    path: "/test2",
    element: <Layout child={<Test2 />} />,
  },
  {
    path: "/statspage",
    element: <Layout child={<StastsPage />} />,
  },
  {
    path: "/dashboard",
    element: <Layout child={<DashboardIndex />} />,
  },
  {
    path: "/loginform",
    element: <LoginForm />,
  },
  {
    path: "/profile",
    element: <Layout child={<ProfileIndex />} />,
  },
  {
    path: "/register",
    element: <RegistrationForm />,
  },
  {
    path: "/forgot_password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset_password",
    element: <ResetPassword />,
  },
  {
    path: "/users",
    element: <Layout child={<Users />} />,
  },
];
