import React, {useEffect} from 'react';
import styled from 'styled-components/native';

// assets
import ArrowLeft from 'v1/assets/arrowLeft.svg';
import useCustomRoute from 'v1/hooks/useCustomRoute';

// types

const NAV001 = () => {
  const {goBack, setOptions} = useCustomRoute();
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <StyledButton onPress={() => goBack()}>
          <Icon source={ArrowLeft} />
        </StyledButton>
      ),
    });
  }, [goBack, setOptions]);
  return null;
};

export default NAV001;

const StyledButton = styled.TouchableOpacity``;

const Icon = styled.Image``;
