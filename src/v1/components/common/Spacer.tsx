import React from 'react';
import styled from 'styled-components/native';
type SpacerProps = {
  height?: number;
  width?: number;
};

const Spacer: React.FC<SpacerProps> = ({height, width}) => {
  return <ViewSpacer height={height} width={width} />;
};

export default Spacer;

const ViewSpacer = styled.View<SpacerProps>`
  height: ${props => props.height || 0}px;
  width: ${props => props.width || 0}px;
`;
