import AnalyticsIcon from '../icons/AnalyticsIcon';
import Invoice from '../icons/Invoice';

export const SidebarMenus = [
  {
    name: 'Apps',
    icon: <AnalyticsIcon className="w-10 h-10" />,
    route: '/',
  },
  {
    name: 'Subscriptions',
    icon: <Invoice className="w-10 h-10" />,
    route: '/test',
  },
  {
    name: 'Library',
    icon: <AnalyticsIcon className="w-10 h-10" />,
    route: '/test2',
  },
  {
    name: 'Explore',
    icon: <AnalyticsIcon className="w-10 h-10" />,
    route: '/test',
    items: ['Movies', 'Live', 'Gaming', 'News'],
  },
  {
    name: 'Settings',
    icon: <AnalyticsIcon className="w-10 h-10" />,
    route: '/test',
    items: ['History', 'Help', 'Feedback', 'Reports'],
  },
  {
    name: 'Trending',
    icon: <AnalyticsIcon className="w-10 h-10" />,
    route: '/test',
  },
  {
    name: 'Music',
    icon: <AnalyticsIcon className="w-10 h-10" />,
    route: '/test',
  },
  {
    name: 'Watch Later',
    icon: <AnalyticsIcon className="w-10 h-10" />,
    route: '/test',
  },
];
