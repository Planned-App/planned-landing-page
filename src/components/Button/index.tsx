import React from 'react';
import { classNames } from '@/app/utility';
interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
  className: string;
}

const Button: React.FC<Props> = ({
  border,
  color,
  children,
  height,
  onClick,
  width,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames('rounded-[30px]', className)}
      style={{
        backgroundColor: color || undefined,
        border: border || undefined,
        height: height || undefined,
        width: width || undefined,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
