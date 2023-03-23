import { useNavigate } from 'react-router-dom';
import DownArrow from '../../icons/DownArrow';
import UpArrow from '../../icons/UpArrow';

type ButtonProps = {
  onClick: (item: string) => void;
  name: string;
  icon?: any;
  isActive: boolean;
  isHovered?: boolean;
  hasSubNav?: boolean;
  route?: any;
};
const Icon = ({ icon }: { icon: any }) => (
  <>
    <span className="material-symbols-outlined">{icon}</span>
  </>
);

const NavButton = ({
  onClick,
  name,
  icon,
  isActive,
  hasSubNav,
  isHovered,
  route,
}: ButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        onClick(name);
        navigate(route);
      }}
      className={`${
        isActive ? 'active' : ''
      } dark:text-primary-bgPrimary text-black`}
    >
      {icon}
      {isHovered && <span>{name}</span>}
      {hasSubNav && isHovered && (
        <Icon icon={!isActive ? <DownArrow /> : <UpArrow />} />
      )}
    </button>
  );
};
export default NavButton;
