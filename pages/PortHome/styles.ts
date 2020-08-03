import styled from 'styled-components';
import customColors from '../../styles/customColors';

export const Container = styled.div`
  padding-bottom: 4rem;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const TagGreen = styled.div`
  padding: 6px;
  display: inline-block;
  border-radius: 3px;
  background: ${customColors.secondColor};
`;

export const Label = styled.p`
  color: ${customColors.backgroundApp};
`;
