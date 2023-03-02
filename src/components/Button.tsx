import React from 'react';

interface ButtonProps {
  icon?: JSX.Element;
  name: string;
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  varient: 'primary' | 'secondary' | 'danger' | 'disabled';
  styles?: any;
  disabled?: boolean;
  onClick?: () => void;
  navigate?: string | undefined;
  className?: any;
}

const Button = ({
  name,
  color,
  icon,
  styles,
  type,
  varient,
  onClick,
  disabled,
  className,
  navigate,
}: ButtonProps) => {
  console.log(varient);
  const defaultColors: string[] = [
    'primary',
    'secondary',
    'danger',
    'disabled',
  ];
  let currentColor: any;
  defaultColors?.filter((color) => {
    if (varient === color) {
      currentColor = `${color}`;
    }
    return '';
  });
  return (
    <>
      <div
        className={`flex ${
          varient && currentColor
        } rounded-lg px-4 py-2 items-center gap-3 cursor-pointer hover:opacity-70 transition-all duration-150 ${
          !className ? '' : className
        } `}
        {...styles}
      >
        {icon}
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className="border-none outline-none text-white w-full text-center cursor-pointer"
        >
          {name}
        </button>
      </div>
    </>
  );
};

export default Button;
