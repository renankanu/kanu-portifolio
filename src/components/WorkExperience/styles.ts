import styled from 'styled-components'

export const ExperienceSection = styled.section``

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

export const TimeLine = styled.div``

export const UndecoratedList = styled.ul`
  border-left: 4px solid ${({ theme }) => theme.menu};
  border-radius: 0.8rem;
  background-color: rgba(0, 0, 0, 0.05);
  margin: 0 auto;
  position: relative;
  padding: 5rem;
  list-style: none;
  text-align: left;
  width: 70%;

  @media screen and (max-width: 768px) {
    margin: 0 0 0 auto;
  }
`

export const ListItem = styled.li`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  position: relative;
  last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
    border: none;
  }
  &:before,
  &:after {
    position: absolute;
    display: block;
    top: 50%;
    transform: translateY(-50%);
  }
  &:before {
    content: attr(data-date);
    left: -21rem;
    text-align: right;
    min-width: 12rem;
    font-size: 1.5rem;
    @media screen and (max-width: 768px) {
      left: -19.5rem;
    }
  }
  &:after {
    content: '';
    box-shadow: 0 0 0 4px ${({ theme }) => theme.secondColor};
    border-radius: 100%;
    left: -6rem;
    height: 1.5rem;
    width: 1.5rem;
    background-color: ${({ theme }) => theme.vistaBlue};
  }
`

export const WorkTitle = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 1rem;
  opacity: 0.3;
`

export const WorkDesc = styled.p``

export const a = styled.div``
