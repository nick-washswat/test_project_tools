import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  id?: string;
  imageUrl?: string;
  borderRound?: number;
};

const UI003: React.FC<Props> = ({imageUrl, borderRound}) => {
  return (
    <Wrapper borderRadius={borderRound || 0}>
      <StyledImage source={{uri: imageUrl}} />
    </Wrapper>
  );
};

export default UI003;

const Wrapper = styled.View<{borderRadius: number}>`
  height: 200px;
  width: ${Dimensions.get('screen').width - 48}px;
  border-radius: ${props => props.borderRadius}px;
  background-color: #348738;
  overflow: hidden;
  margin-vertical: 5px;
  margin-horizontal: 24px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;
