import { useState } from 'react';
import NavButton from '../components/Buttons/NavButton';
import DashboardIcon from '../icons/DashboardIcon';
import ProfileIcon from '../icons/ProfileIcon';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarMenus } from '../Features/routes/SidebarMenus';
import LogoutIcon from '../icons/LogoutIcon';

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleClick = (item: string) => {
    setActiveItem(item !== activeItem ? item : '');
    console.log('ITEM', item);
    navigate(`/${item}`);
  };
  console.log('ACTIVE', activeItem);
  const isSubNavOpen = (item: string, items: string[]) =>
    items.some((i) => i === activeItem) || item === activeItem;
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
          <Link to={'/dashboard'} className='text-center ml-4' type="button">
            {<DashboardIcon />}
          </Link>
          {isHovered && <h1 className="">Dashboard</h1>}
        </header>
        {SidebarMenus.map((item) => (
          <>
            {!item.submenu && (
              <NavButton
                onClick={handleClick}
                name={item.name}
                icon={item.icon}
                isActive={activeItem === item.name}
                hasSubNav={!!item.submenu}
                isHovered={isHovered}
                route={item.route}
                key={item.name}
              />
            )}
            {item.submenu && (
              <>
                <NavButton
                  onClick={handleClick}
                  name={item.name}
                  icon={item.icon}
                  isActive={activeItem === item.name}
                  hasSubNav={!!item.submenu}
                  isHovered={isHovered}
                  route={item.route}
                  key={item.name}
                />
                <div
                  className={`sub-nav ${
                    isSubNavOpen(
                      item.name,
                      item.submenu?.map((el) => el?.name)
                    )
                      ? 'open'
                      : ''
                  }`}
                >
                  {item.submenu.map((subItem) => (
                    <NavButton
                      onClick={handleClick}
                      name={subItem?.name}
                      isActive={activeItem === subItem?.name}
                      icon={subItem?.icon}
                      route={subItem?.route}
                      isHovered={isHovered}
                      key={item.name}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ))}
        <div className="absolute bottom-0 flex flex-col justify-center items-center gap-4 pb-4 transition-all duration-500">
          <button onClick={() => navigate('/profile')}>
            <ProfileIcon />
            {isHovered && (
              <span className="transition-all duration-500">Profile</span>
            )}
          </button>
          <div className="flex gap-4 duration-500 cursor-pointer">
            <LogoutIcon /> {isHovered && <span>Logout</span>}
          </div>
        </div>
      </nav>
    </aside>
  );
};
