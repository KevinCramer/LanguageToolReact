import './CustomButton.css';
import { Button } from 'react-bootstrap'
import React from 'react';

type CustomButtonProps = {
  disabled: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const CustomButton = ({ disabled, onClick, children }: CustomButtonProps) => {
  return (
    <Button
      className='my-custom-button'
      size="sm"
      variant="secondary"
      aria-disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default CustomButton;