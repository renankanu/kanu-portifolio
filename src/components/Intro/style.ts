import styled from 'styled-components'
import defaultTheme from '../../styles/theme'

export const Container = styled.div`
  padding: 5rem 20rem 0rem 20rem;
  display: flex;

  @media (max-width: 1245px) {
    padding: 5rem 16rem 0rem 16rem;
  }

  @media (max-width: 1110px) {
    padding: 5rem 12rem 0rem 12rem;
  }

  @media (max-width: 852px) {
    padding: 5rem 6rem 0rem 6rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5rem 2rem 0rem 2rem;
  }
`

export const ContainerIntroDesc = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.menu};
  color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background: ${({ theme }) => theme.secondColor};
`

export const ContainerTitle = styled.div`
  margin-top: 40px;
`

export const Title = styled.div`
  font-size: 36px;
`

export const Label = styled.p`
  color: ${({ theme }) => theme.backgroundApp};
`

export const Button = styled.button`
  background: linear-gradient(to right, #3dbec6 3%, #292eec);
  height: 53px;
  border-radius: 35px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-size: 20px;
  &:active {
    background: linear-gradient(to right, #292eec 4%, #653ff5 50%, #a752fe, #ae54ff);
  }
`

export const Avatar = styled.img`
  vertical-align: middle;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;

  @media (max-width: 640px) {
    vertical-align: middle;
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
  }
`
