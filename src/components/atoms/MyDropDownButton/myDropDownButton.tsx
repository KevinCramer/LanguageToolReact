import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './myDropDownButton.css';

interface MyButtonProps {
  title: string;
  children: React.ReactNode;
  align?: any

}

const MyButton: React.FC<MyButtonProps> = ({ title,children, align = 'start' }) => {
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