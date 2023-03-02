import React from 'react';
import Button from './Button';

interface TaskCardProps {
  name: string;
  title: string;
  content: JSX.Element;
}
const TaskCard = ({ name, title, content }: TaskCardProps) => {
  return (
    <>
      <div className="bg-white flex flex-col p-5 rounded-md shadow-md gap-5">
        <div className="flex justify-between">
          <div className='flex gap-4'>
          <input type="checkbox" name={name} />
          <h2>{title}</h2>
          </div>
          <span>...</span>
        </div>
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
        <div>{content}</div>
      </div>
    </>
  );
};

export default TaskCard;
