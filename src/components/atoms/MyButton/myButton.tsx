import './myButton.css';
import { Button } from 'react-bootstrap'
import React from 'react';

interface MyButtonProps {
  disabled: boolean;
  onClick: any
  children: React.ReactNode
}

const MyButton: React.FC<MyButtonProps> = ({ disabled, onClick, children }) => {
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

export default MyButton;