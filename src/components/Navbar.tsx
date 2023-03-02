import React from 'react';
import Button from './Button';
import PlusIcon from '../icons/PlusIcon';
import SearchIcon from '../icons/SearchIcon';
import SearchBar from './SearchBar';

interface NavbarProps {
  name: string;
  hideSearch: boolean;
  buttonName: string;
}
const Navbar = ({ name, hideSearch, buttonName }: NavbarProps) => {
  return (
    <nav>
      <div className="flex justify-between w-full p-4">
        <div className="logo ml-32 text-text-primary font-semibold text-2xl">
          {name}
        </div>
        <div className="flex gap-2 items-center">
          {!hideSearch && (
            <SearchBar/>
          )}
          <Button
            varient="primary"
            icon={<PlusIcon />}
            name={buttonName}
            onClick={() => {
              console.log('Clicked');
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
