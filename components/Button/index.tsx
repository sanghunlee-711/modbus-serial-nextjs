import React from 'react';
import styled from 'styled-components';
interface IButtonProps {
  text?: string;
  onClick: () => void;
}

const ButtonStyle = styled.button`
  border-radius: 4px;
  border: 1px solid black;
`;

const Button: React.FC<IButtonProps> = ({ text, onClick }): JSX.Element => {
  return <ButtonStyle onClick={onClick}>{text || 'Button'}</ButtonStyle>;
};

export default Button;
