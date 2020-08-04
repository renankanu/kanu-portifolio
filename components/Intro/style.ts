import styled from 'styled-components';
import customColors from '../../styles/customColors';

export const Container = styled.div`
  padding: 10rem 10rem 0rem 10rem;
  display: flex;

  @media (max-width: 960px) {
    padding: 10rem 2rem 2rem 2rem;
  }
`;

export const ContainerIntroDesc = styled.div`
  width: 100%;
`;

export const ContainerIntroImage = styled.div`
  width: 100%;
`;

export const TagGreen = styled.div`
  padding: 16px 16px;
  height: 32px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background: ${customColors.secondColor};
`;

export const Label = styled.p`
  color: ${customColors.backgroundApp};
`;

export const Avatar = styled.img`
  vertical-align: middle;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;

  @media (max-width: 960px) {
    vertical-align: middle;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }
`;
