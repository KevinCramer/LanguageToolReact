import { Button } from 'react-bootstrap'
import React from 'react';

type CustomButtonProps = {
  disabled: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  size? : string;
}

const CustomButton = ({ disabled, onClick, children, backgroundColor = '#F8F8F8', color = '#4A4A4A', size = 'sm' }: CustomButtonProps) => {
  return (
    <Button
      size={size as any}
      variant='secondary'
      aria-disabled={disabled}
      onClick={onClick}
      style={{ backgroundColor, color }}
    >
      {children}
    </Button>
  );
}

export default CustomButton;