import React from 'react';
import styled from 'styled-components/native';

type Props = {
  isHorizontalBar: boolean;
  height: number;
};

const BLANK: React.FC<Props> = props => {
  return <Wrapper {...props} />;
};

export default BLANK;

const Wrapper = styled.View<Props>`
  height: ${props => props.height};
`;
