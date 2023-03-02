import { useState } from 'react';
import NavButton from './NavButton';
import UpArrow from '../icons/UpArrow';
import DashboardIcon from '../icons/DashboardIcon';
import AnalyticsIcon from '../icons/AnalyticsIcon';
import Invoice from '../icons/Invoice';
import ProfileIcon from '../icons/ProfileIcon';
import { useNavigate } from 'react-router-dom';
import { SidebarMenus } from '../Utils/SidebarMenus';

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleClick = (item: string) => {
    console.log(item);
    console.log('activeItem', activeItem);
    setActiveItem(item !== activeItem ? item : '');
    navigate(`/${item}`);
  };

  const isSubNavOpen = (item: string, items: string[]) =>
    items.some((i) => i === activeItem) || item === activeItem;
  // console.log(isHovered);
  console.log('IS SUB NAV', isSubNavOpen?.name);
  return (
    <aside
      className="sidebar bg-primary-bgPrimary z-50"
      style={{ width: isHovered ? '250px' : '100px' }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <nav className="sidebar-nav bg-white">
        <header className="sidebar-header flex justify-center items-center">
          {/* <img src={Logo} className="sidebar-logo" /> */}
          <button type="button">{<DashboardIcon />}</button>
          {isHovered && <h1 className="">Dashboard</h1>}
        </header>
        {SidebarMenus.map((item) => (
          <>
            {!item.items && (
              <NavButton
                onClick={handleClick}
                name={item.name}
                icon={item.icon}
                isActive={activeItem === item.name}
                hasSubNav={!!item.items}
                isHovered={isHovered}
                route={item.route}
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
                  isHovered={isHovered}
                  route={item.route}
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
                      // icon={<UpArrow />}
                      route={item.route}
                      isHovered={isHovered}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ))}
        <div className="absolute bottom-0">
          <button>
            <ProfileIcon />
          </button>
        </div>
      </nav>
    </aside>
  );
};
