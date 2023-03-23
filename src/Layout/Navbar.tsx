import React from 'react';
import Button from '../components/Buttons/Button';
import SearchBar from '../components/SearchBar';

interface NavbarProps {
  name: string;
  hideSearch: boolean;
  buttonName: string;
  buttonIcon?: any;
  buttonVarient: 'primary' | 'secondary' | 'danger' | 'disabled';
  topRightMenu?: any;
  onClick: () => void;
  hasRightMenu?: boolean;
}
const Navbar = ({
  name,
  buttonIcon,
  hideSearch,
  buttonName,
  buttonVarient,
  topRightMenu,
  onClick,
  hasRightMenu,
}: NavbarProps) => {
  return (
    <nav>
      <div className="flex justify-between w-full p-4">
        <div className="logo ml-32 text-text-primary font-semibold text-2xl">
          {name}
        </div>
        {hasRightMenu && (
          <div className="flex gap-2 items-center">
            {!hideSearch && <SearchBar />}
            {topRightMenu ?? (
              <Button
                varient={buttonVarient}
                icon={buttonIcon}
                name={buttonName}
                onClick={onClick}
              />
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
