import { CalendarIcon } from '@heroicons/react/24/outline';
import AnalyticsIcon from "../../icons/AnalyticsIcon";
import DashboardIcon from '../../icons/DashboardIcon';
import Invoice from "../../icons/Invoice";
import ScheduleIcon from '../../icons/ScheduleIcon';
import MessageIcon from '../../icons/MessageIcon';
import SettingsIcon from '../../icons/SettingsIcon';
import NotificationIcon from '../../icons/NotificationIcon';
import CalenderIcon from '../../icons/CalenderIcon';

export const SidebarMenus = [
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
    route: "/test",
    submenu: [
      {
        name: "Index",
        route: "/invoice",
        icon: <Invoice />,
      }, {
        name: "history",
        route: "/history",
        icon: <AnalyticsIcon />,
      }, {
        name: "history",
        route: "/history",
        icon: <AnalyticsIcon />,
      },
    ],
  },
  {
    name: "Scehdule",
    icon: <ScheduleIcon />,
    route: "/test",
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
        route: "/test",
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
