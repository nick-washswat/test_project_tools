import React from 'react';
import styled from 'styled-components/native';

// assets
import ArrowLeft from 'v1/assets/arrowLeft.svg';

const NAV001 = () => {
  return (
    <StyledButton>
      <Icon source={ArrowLeft} />
    </StyledButton>
  );
};

export default NAV001;

const StyledButton = styled.TouchableOpacity``;

const Icon = styled.Image``;
