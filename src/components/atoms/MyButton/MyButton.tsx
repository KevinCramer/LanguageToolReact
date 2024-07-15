import './MyButton.css';
import { Button } from 'react-bootstrap'
import React from 'react';

type MyButtonProps = {
  disabled: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const MyButton = ({ disabled, onClick, children }: MyButtonProps) => {
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