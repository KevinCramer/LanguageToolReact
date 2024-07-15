import './myDropDownButton.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';

type AlignType = React.ComponentProps<typeof DropdownButton>['align'];

type MyButtonProps = {
  title: string;
  children: React.ReactNode;
  align?: AlignType;

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