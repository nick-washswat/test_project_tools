import React from 'react';
import styled from 'styled-components/native';

type Props = {
  id: string;
  imageUrl: string;
  borderRound: number;
};

const UI003: React.FC<Props> = ({imageUrl, borderRound}) => {
  return (
    <Wrapper borderRadius={borderRound}>
      <StyledImage source={{uri: imageUrl}} />
    </Wrapper>
  );
};

export default UI003;

const Wrapper = styled.View<{borderRadius: number}>`
  height: 200;
  width: '100%';
  border-radius: ${props => props.borderRadius};
`;

const StyledImage = styled.Image`
  width: '100%';
  height: '100%';
`;
