import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';

type AlignType = React.ComponentProps<typeof DropdownButton>['align'];

type CustomDropDownButtonProps = {
  title: string;
  children: React.ReactNode;
  align?: AlignType;
  size?: string;

}

const CustomDropDownButton = ({ title,children, align = 'start', size = 'sm' }: CustomDropDownButtonProps) => {
  return (
    <DropdownButton
      title={title}
      size={size as any}
      align={align}
    >
      {children}
    </DropdownButton>
  );
}

export default CustomDropDownButton;