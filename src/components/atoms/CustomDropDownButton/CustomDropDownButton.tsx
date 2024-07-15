import './CustomDropDownButton.scss';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';

type AlignType = React.ComponentProps<typeof DropdownButton>['align'];

type CustomButtonProps = {
  title: string;
  children: React.ReactNode;
  align?: AlignType;

}

const CustomButton = ({ title,children, align = 'start' }: CustomButtonProps) => {
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

export default CustomButton;