import { CalendarIcon } from '@heroicons/react/24/outline';
import AnalyticsIcon from "../../illustrations/icons/AnalyticsIcon";
import DashboardIcon from '../../illustrations/icons/DashboardIcon';
import Invoice from "../../illustrations/icons/Invoice";
import ScheduleIcon from '../../illustrations/icons/ScheduleIcon';
import MessageIcon from '../../illustrations/icons/MessageIcon';
import SettingsIcon from '../../illustrations/icons/SettingsIcon';
import NotificationIcon from '../../illustrations/icons/NotificationIcon';
import CalenderIcon from '../../illustrations/icons/CalenderIcon';

interface MenuOptions {
  name: string;
  icon: JSX.Element;
  route: string;
  submenu?: MenuOptions[];
}
export const SidebarMenus: MenuOptions[] = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    route: "/",
  },
  {
    name: "Analytics",
    icon: <AnalyticsIcon />,
    route: "/test",
  },
  {
    name: "Invoice",
    icon: <Invoice />,
    route: "/invoice",
    submenu: [
      {
        name: "Create ",
        route: "/create-invoice",
        icon: <Invoice />,
      }
    ],
  },
  {
    name: "Users",
    icon: <ScheduleIcon />,
    route: "/users",
  },
  {
    name: "Calender",
    icon: <CalenderIcon />,
    route: "/test",
  },

  {
    name: "Message",
    icon: <MessageIcon />,
    route: "/test",
    submenu: [
      {
        name: 'Clients',
        icon: <AnalyticsIcon />,
        route: "/new",
      }
    ]
  },
  {
    name: "Notification",
    icon: <NotificationIcon />,
    route: "/test",
  },
  {
    name: "Settings",
    icon: <SettingsIcon />,
    route: "/test",
  },
  // {
  //   name: "statspage",
  //   icon: <AnalyticsIcon  />,
  //   route: "/statspage",
  // },
  // {
  //   name: "random2",
  //   icon: <AnalyticsIcon />,
  //   route: "/random2",
  // },
  // {
  //   name: "LoginForm",
  //   icon: <AnalyticsIcon />,
  //   route: "/LoginForm",
  // },
  // {
  //   name: "register",
  //   icon: <AnalyticsIcon />,
  //   route: "/register",
  // },
  // {
  //   name: "users",
  //   icon: <AnalyticsIcon />,
  //   route: "/users",
  // },
];
