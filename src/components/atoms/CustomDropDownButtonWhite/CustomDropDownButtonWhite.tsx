import './CustomDropDownButtonWhite.scss';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';

type AlignType = React.ComponentProps<typeof DropdownButton>['align'];

type CustomDropDownButtonWhiteProps = {
  title: string;
  children: React.ReactNode;
  align?: AlignType;

}

const CustomDropDownButtonWhite = ({ title,children, align = 'start' }:
   CustomDropDownButtonWhiteProps) => {
  return (
    <div className="white-drop-down-button-container">
      <DropdownButton
        title={title}
        size="sm"
        align={align}
      >
        {children}
      </DropdownButton>
    </div>
  );
}

export default CustomDropDownButtonWhite;