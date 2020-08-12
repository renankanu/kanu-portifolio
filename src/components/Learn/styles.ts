import styled from 'styled-components'

export const LearnSection = styled.section`
  padding: 15rem 0;
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

export const MyStudies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2.5rem;
`

export const LearnItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IconContainer = styled.div`
  width: 10rem;
  height: 10rem;
  display: flex;
`

export const StackImg = styled.img`
  width: 50px;
  height: 50px;
  margin: auto;
`

export const TitleSkill = styled.div`
  letter-spacing: 2px;
  margin: 0 -2px 2rem 0;
`
