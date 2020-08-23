import styled from 'styled-components'

export const Headerlanding = styled.header`
  width: 100%;
  height: 100vh;
`

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  z-index: 1;
`
export const TitleName = styled.h1`
  font-size: 12rem;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.white},
    ${({ theme }) => theme.secondColor}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 1rem;
  font-weight: 600;
  user-select: none;

  @media screen and (max-width: 884px) {
    font-size: 8rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 630px) {
    font-size: 3rem;
  }
`

export const SubTitleName = styled.h6`
  font-size: 2rem;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 630px) {
    font-size: 1.4rem;
  }
`

export const ContainerAnimation = styled.h1`
  margin-top: 6vw;
  font-size: 4vw;
  font-weight: bold;
  overflow: hidden;
`

export const Box = styled.span`
  position: absolute;
  bottom: 0;
  display: inline-block;
  background-color: ${({ theme }) => theme.menu};
  height: 1vw;
  z-index: -1;
`

export const Hi = styled.span`
  margin-left: 1vw;
  display: inline-block;
`
export const MySkills = styled.span`
  font-weight: normal;
  padding-left: 1.2vw;
`
export const Cursor = styled.span``
