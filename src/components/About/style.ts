import styled from 'styled-components'

export const AboutSection = styled.div`
  padding: 10rem 0;
`
export const Container = styled.div`
  width: 90%;
  max-width: 120rem;
  height: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 630px) {
    flex-direction: column;
  }
`

export const ContainerIntroDesc = styled.div`
  flex: 1;
`

export const ContainerImage = styled.div`
  flex: 1;
  margin-right: 5rem;

  @media screen and (max-width: 768px) {
    height: 250px;
    object-fit: cover;
  }

  @media screen and (max-width: 630px) {
    margin: 0 0 7rem 0;
  }
`

export const AboutHeading = styled.div`
  text-align: center;
  text-transform: uppercase;
  line-height: 0;
  margin-bottom: 6rem;
`

export const Title = styled.h1`
  font-size: 10rem;
  opacity: 0.3;
  @media screen and (max-width: 768px) {
    font-size: 8rem;
  }
`

export const SubTitle = styled.h6`
  font-size: 2rem;
  font-weight: 300;
`

export const Description = styled.p`
  font-size: 1.8rem;
`

export const NavList = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: initial;
  }
`

export const IconLink = styled.a`
  text-decoration: none;
  color: #ccc;
`

export const ListItem = styled.li`
  margin: 0 2rem;
  @media screen and (max-width: 768px) {
    margin: 0 2rem;
  }
`

export const Item = styled.i`
  font-size: 5rem;
  transition: color 650ms;
  &:hover {
    color: ${({ theme }) => theme.secondColor};
  }
`

export const SocialMediaContainer = styled.div`
  margin-top: 2rem;
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

export const Image = styled.img`
  width: 100%;
`