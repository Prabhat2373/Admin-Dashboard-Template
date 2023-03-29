import { useState } from 'react';
import NavButton from '../components/Buttons/NavButton';
import DashboardIcon from '../illustrations/icons/DashboardIcon';
import ProfileIcon from '../illustrations/icons/ProfileIcon';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { SidebarMenus } from '../Features/routes/SidebarMenus';
import LogoutIcon from '../illustrations/icons/LogoutIcon';
import Logo from '../illustrations/Logo';

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const params = useLocation()
  console.log('params', params.pathname)
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
      <nav className="sidebar-nav bg-white flex flex-col justify-between overflow-y-scroll ">
        <header className="sidebar-header flex flex-col justify-center items-center py-6 px-3">
          {/* <img src={Logo} className="sidebar-logo" /> */}
          <Link to={'/dashboard'} type="button">
            <div>
              {<Logo />}
            </div>
          </Link>
          <h1 className={`${isHovered ? 'text-dark-blue ' : ''} font-semibold text-lg`}>Wons</h1>
        </header>
        <div>
          {SidebarMenus.map((item) => (
            <>
              {!item.submenu && (
                <NavButton
                  onClick={handleClick}
                  name={item.name}
                  icon={item.icon}
                  isActive={activeItem === item.name || params.pathname === `/${item.name}`}
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
                    isActive={activeItem === item.name || params.pathname === `/${item.name}`}
                    hasSubNav={!!item.submenu}
                    isHovered={isHovered}
                    route={item.route}
                    key={item.name}
                  />
                  <div
                    className={`sub-nav ${isSubNavOpen(
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
        </div>
        <div className="">
          <button onClick={() => navigate('/profile')}>
            <ProfileIcon className="w-10" />
            {isHovered && (
              <span className="transition-all duration-500">Profile</span>
            )}
          </button>
          <button onClick={() => navigate('/profile')}>
            <LogoutIcon />
            {isHovered && (
              <span className="transition-all duration-500">Logout</span>
            )}
          </button>
        </div>
      </nav>
    </aside >
  );
};
