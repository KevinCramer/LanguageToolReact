import './CustomDropDownButton.scss';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';

type AlignType = React.ComponentProps<typeof DropdownButton>['align'];

type CustomDropDownButtonProps = {
  title: string;
  children: React.ReactNode;
  align?: AlignType;

}

const CustomDropDownButton = ({ title,children, align = 'start' }: CustomDropDownButtonProps) => {
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

export default CustomDropDownButton;