import React from 'react';
import Button from '../Buttons/Button';
import DropDownMenu from '../Popups/DropDownMenu';

interface TaskCardProps {
  name: string;
  title: string;
  hasDropdown?: boolean;
  content: JSX.Element;
  dropDownOptions?: any;
  dropdownTitle?: any;
  hasButtonGroup?: boolean;
}
const TaskCard = ({
  name,
  title,
  content,
  hasDropdown,
  dropDownOptions,
  dropdownTitle,
  hasButtonGroup = true,
}: TaskCardProps) => {
  return (
    <React.Fragment>
      <div className="bg-white flex flex-col p-5 rounded-md gap-5">
        <div className="flex justify-between">
          <div className="flex gap-4">
            {/* <label htmlFor="checkbox" className='rounded-full bg-primary-pink'></label> */}
            <input
              type="checkbox"
              name={name}
              className="w-[20px] h-[20px] cursor-pointer"
            />
            <h2>{title}</h2>
          </div>
          {hasDropdown && (
            <DropDownMenu
              menuOptions={dropDownOptions}
              menuTitle={dropdownTitle}
            />
          )}
        </div>
        {hasButtonGroup && (
          <div className="flex gap-3">
            <Button
              name="Low"
              varient="danger"
              styles={{ borderRadius: '50px' }}
            />
            <Button
              name="Low"
              varient="danger"
              styles={{ borderRadius: '20px' }}
            />
          </div>
        )}
        <div>{content}</div>
      </div>
    </React.Fragment>
  );
};

export default TaskCard;
