import {  useState } from 'react';
import NavButton from './NavButton';

const menuItems = [
  {
    name: 'Apps',
    icon: 'https://img.icons8.com/material-outlined/24/null/dashboard-layout.png',
  },
  {
    name: 'Subscriptions',
    icon: 'https://img.icons8.com/material-outlined/24/null/dashboard-layout.png',
  },
  {
    name: 'Library',
    icon: 'https://img.icons8.com/material-outlined/24/null/dashboard-layout.png',
  },
  {
    name: 'Explore',
    icon: 'https://img.icons8.com/material-outlined/24/null/dashboard-layout.png',
    items: ['Movies', 'Live', 'Gaming', 'News'],
  },
  {
    name: 'Settings',
    icon: 'https://img.icons8.com/material-outlined/24/null/dashboard-layout.png',
    items: ['History', 'Help', 'Feedback', 'Reports'],
  },
  {
    name: 'Trending',
    icon: 'https://img.icons8.com/material-outlined/24/null/dashboard-layout.png',
  },
  {
    name: 'Music',
    icon: 'https://img.icons8.com/material-outlined/24/null/dashboard-layout.png',
  },
  {
    name: 'Watch Later',
    icon: 'https://img.icons8.com/material-outlined/24/null/dashboard-layout.png',
  },
];



const NavHeader = () => (
  <header className="sidebar-header">
    <button type="button">
      {/* <Icon icon="menu" /> */}
      
    </button>
    {/* <img src={Logo} className="sidebar-logo" /> */}
    <h1 className="text-white">Dashboard</h1>
  </header>
);



export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>('');

  const handleClick = (item: string) => {
    console.log('activeItem', activeItem);
    setActiveItem(item !== activeItem ? item : '');
  };

  const isSubNavOpen = (item: string, items: string[]) =>
    items.some((i) => i === activeItem) || item === activeItem;

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavHeader />
        {menuItems.map((item) => (
          <>
            {!item.items && (
              <NavButton
                onClick={handleClick}
                name={item.name}
                icon={item.icon}
                isActive={activeItem === item.name}
                hasSubNav={!!item.items}
              />
            )}
            {item.items && (
              <>
                <NavButton
                  onClick={handleClick}
                  name={item.name}
                  icon={item.icon}
                  isActive={activeItem === item.name}
                  hasSubNav={!!item.items}
                />
                <div
                  className={`sub-nav ${
                    isSubNavOpen(item.name, item.items) ? 'open' : ''
                  }`}
                >
                  {item.items.map((subItem) => (
                    <NavButton
                      onClick={handleClick}
                      name={subItem}
                      isActive={activeItem === subItem}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ))}
      </nav>
    </aside>
  );
};
