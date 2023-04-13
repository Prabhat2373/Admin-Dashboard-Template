import React from 'react';
import SearchBar from './SearchBar';
import Button from './Buttons/Button';

interface NavbarProps {
  name: string;
  hideSearch: boolean;
  buttonName: string;
  buttonIcon?: any;
  buttonVarient: 'primary' | 'secondary' | 'danger' | 'disabled';
  onClick: () => void;
}
const Navbar = ({
  name,
  buttonIcon,
  hideSearch,
  buttonName,
  buttonVarient,
  onClick
}: NavbarProps) => {
  return (
    <nav>
      <div className="flex justify-between w-full p-4">
        <div className="logo ml-32 text-text-primary font-semibold text-2xl">
          {name}
        </div>
        <div className="flex gap-2 items-center">
          {!hideSearch && <SearchBar />}
          <Button
            varient={buttonVarient}
            icon={buttonIcon}
            name={buttonName}
            onClick={onClick}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
