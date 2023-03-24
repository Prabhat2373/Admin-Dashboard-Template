// import { useState } from 'react';
// import NavButton from './NavButton';
// import UpArrow from '../icons/UpArrow';
// import DashboardIcon from '../icons/DashboardIcon';
// import AnalyticsIcon from '../icons/AnalyticsIcon';
// import Invoice from '../icons/Invoice';
// import ProfileIcon from '../icons/ProfileIcon';
// import { useNavigate } from 'react-router-dom';
// import { SidebarMenus } from '../Features/routes/SidebarMenus';

// export const Sidebar = () => {
//   const [activeItem, setActiveItem] = useState<string>('');
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();
//   const handleClick = (item: string) => {
//     console.log(item);
//     console.log('activeItem', activeItem);
//     setActiveItem(item !== activeItem ? item : '');
//     navigate(`/${item}`);
//   };

//   const isSubNavOpen = (item: string, submenu: {
//     name: string;
//     route: string;
//     icon: JSX.Element;
//   }[]) =>
//     submenu.some((i) => i.route === activeItem) || item === activeItem;
//   // console.log(isHovered);
//   console.log('IS SUB NAV', isSubNavOpen?.name);
//   return (
//     <aside
//       className="sidebar bg-primary-bgPrimary z-50"
//       style={{ width: isHovered ? '250px' : '100px' }}
//       onMouseEnter={() => {
//         setIsHovered(true);
//       }}
//       onMouseLeave={() => {
//         setIsHovered(false);
//       }}
//     >
//       <nav className="sidebar-nav bg-white">
//         <header className="sidebar-header flex justify-center submenu-center">
//           {/* <img src={Logo} className="sidebar-logo" /> */}
//           <button type="button">{<DashboardIcon />}</button>
//           {isHovered && <h1 className="">Dashboard</h1>}
//         </header>
//         {SidebarMenus.map((item) => (
//           <>
//             {!item.submenu && (
//               <NavButton
//                 onClick={handleClick}
//                 name={item.name}
//                 icon={item.icon}
//                 isActive={activeItem === item.name}
//                 hasSubNav={!!item.submenu}
//                 isHovered={isHovered}
//                 route={item.route}
//               />
//             )}
//             {item.submenu && (
//               <>
//                 <NavButton
//                   onClick={handleClick}
//                   name={item.name}
//                   icon={item.icon}
//                   isActive={activeItem === item.name}
//                   hasSubNav={!!item.submenu}
//                   isHovered={isHovered}
//                   route={item.route}
//                 />
//                 <div
//                   className={`sub-nav ${isSubNavOpen(item.name, item.submenu) ? 'open' : ''
//                     }`}
//                 >
//                   {item.submenu.map((subItem) => (
//                     <NavButton
//                       onClick={handleClick}
//                       name={subItem.name}
//                       isActive={activeItem === subItem.name}
//                       // icon={<UpArrow />}
//                       route={item.route}
//                       isHovered={isHovered}
//                     />
//                   ))}
//                 </div>
//               </>
//             )}
//           </>
//         ))}
//         <div className="absolute bottom-0">
//           <button>
//             <ProfileIcon />
//           </button>
//         </div>
//       </nav>
//     </aside>
//   );
// };

import React from 'react'

const Sidebar = () => {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar