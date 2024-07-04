import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './myDropDownButton.css';

type MyButtonProps = {
  title: string;
  children: React.ReactNode;
  align?: any

}

const MyButton = ({ title,children, align = 'start' }: MyButtonProps) => {
  return (
    <DropdownButton
      title={title}
      size="sm"
      align={align}
    >
      {children}
    </DropdownButton>
  );
}

export default MyButton;