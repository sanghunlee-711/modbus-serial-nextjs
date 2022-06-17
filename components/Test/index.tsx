import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: red;
`;

interface ITestProps {
  value?: string;
}

const Test: React.FC<ITestProps> = ({ value }): JSX.Element => {
  return <Wrapper>{value || 'TEST'}</Wrapper>;
};

export default Test;
