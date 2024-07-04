import './myDropDownButton.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';

type MyButtonProps = {
  title: string;
  children: React.ReactNode;
  align?: any;

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