import AnalyticsIcon from "../../icons/AnalyticsIcon";
import Invoice from "../../icons/Invoice";

export const SidebarMenus = [
  {
    name: "Apps",
    icon: <AnalyticsIcon className="w-10 h-10" />,
    route: "/",
  },
  {
    name: "Subscriptions",
    icon: <Invoice className="w-10 h-10" />,
    route: "/test",
  },
  {
    name: "Settings",
    icon: <AnalyticsIcon className="w-10 h-10" />,
    route: "/test",
    submenu: [
      {
        name: "history",
        route: "/history",
        icon: <AnalyticsIcon className="w-10 h-10" />,
      },
    ],
  },
  {
    name: "Trending",
    icon: <AnalyticsIcon className="w-10 h-10" />,
    route: "/test",
  },
  {
    name: "Music",
    icon: <AnalyticsIcon className="w-10 h-10" />,
    route: "/test",
  },

  {
    name: "Watch Later",
    icon: <AnalyticsIcon className="w-10 h-10" />,
    route: "/test",
  },
  {
    name: "statspage",
    icon: <AnalyticsIcon className="w-10 h-10" />,
    route: "/statspage",
  },
  {
    name: "random2",
    icon: <AnalyticsIcon />,
    route: "/random2",
  },
  {
    name: "LoginForm",
    icon: <AnalyticsIcon className="w-10 h-10"/>,
    route: "/LoginForm",
  },
  {
    name: "register",
    icon: <AnalyticsIcon className="w-10 h-10"/>,
    route: "/register",
  },
  {
    name: "users",
    icon: <AnalyticsIcon className="w-10 h-10"/>,
    route: "/users",
  },
];
