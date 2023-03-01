type ButtonProps = {
  onClick: (item: string) => void;
  name: string;
  icon?: string;
  isActive: boolean;
  hasSubNav?: boolean;
};
const Icon = ({ icon }: { icon: string }) => (
  //   <span className="material-symbols-outlined">{icon}</span>
  <img src={icon} alt="icon" className="invert" />
);

const NavButton = ({
  onClick,
  name,
  icon,
  isActive,
  hasSubNav,
}: ButtonProps) => (
  <button
    type="button"
    onClick={() => onClick(name)}
    className={isActive ? 'active' : ''}
  >
    {icon && <Icon icon={icon} />}
    <span>{name}</span>
    {hasSubNav && <Icon icon={`expand_${isActive ? 'less' : 'more'}`} />}
  </button>
);
export default NavButton;
