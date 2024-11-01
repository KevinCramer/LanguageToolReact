import './CustomButtonLight.scss';
import { Button } from 'react-bootstrap'
import React from 'react';

type CustomButtonLightProps = {
  disabled: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const CustomButtonLight = ({ disabled, onClick, children }: CustomButtonLightProps) => {
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

export default CustomButtonLight;