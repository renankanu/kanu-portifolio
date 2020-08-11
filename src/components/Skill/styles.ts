import styled from 'styled-components'

export const ServiceSection = styled.section`
  padding: 10rem 0;
`

export const Container = styled.div`
  width: 90%;
  max-width: 120rem;
  height: 100%;
  margin: 0 auto;
  position: relative;
`
export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 10rem;
`

export const Title = styled.h1`
  font-size: 3.5rem;
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  font-weight: 300;
  position: relative;
  margin-bottom: 1rem;
  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translate(-50%);
    background-color: ${({ theme }) => theme.secondColor};
  }
  &:before {
    width: 10rem;
    height: 3px;
    border-radius: 0.8rem;
  }
  &:after {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    bottom: -1.1rem;
  }
`

export const SubTitle = styled.h6`
  font-size: 1.6rem;
  font-weight: 300;
`

export const MySkills = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 2.5rem;
  text-align: center;
`

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`

export const IconContainer = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.secondColor};
  margin-bottom: 2rem;
  display: flex;
  transform: rotate(45deg);
`

export const Icon = styled.i`
  color: ${({ theme }) => theme.secondColor};
  font-size: 5rem;
  margin: auto;
  transform: rotate(-45deg);
`

export const TitleSkill = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 2rem -2px 2rem 0;
`

export const DescriptionSkill = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
`
