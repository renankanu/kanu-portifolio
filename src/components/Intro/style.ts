import styled from 'styled-components'
import customColors from '../../styles/customColors'

export const Container = styled.div`
  padding: 5rem 20rem 0rem 20rem;
  display: flex;

  @media (max-width: 1230px) {
    padding: 5rem 15rem 0rem 15rem;
  }

  @media (max-width: 1068px) {
    padding: 5rem 10rem 0rem 10rem;
  }

  @media (max-width: 960px) {
    padding: 5rem 2rem 0rem 2rem;
  }
`

export const ContainerIntroDesc = styled.div`
  width: 100%;
`

export const ContainerIntroImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TagGreen = styled.div`
  padding: 16px 16px;
  height: 32px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background: ${customColors.secondColor};
`

export const ContainerTitle = styled.div`
  margin-top: 40px;
`

export const Title = styled.div`
  font-size: 36px;
`

export const Label = styled.p`
  color: ${customColors.backgroundApp};
`

export const Avatar = styled.img`
  vertical-align: middle;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;

  @media (max-width: 960px) {
    vertical-align: middle;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }
`
