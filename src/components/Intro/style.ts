import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  max-width: 885px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 80px;
  padding-right: 10px;
  padding-left: 10px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  display: flex;
`

export const ContainerIntroDesc = styled.div`
  width: 50%;
`

export const ContainerIntroImage = styled.div`
  width: 50%;
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
//button example
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
  max-width: 100%;
`
