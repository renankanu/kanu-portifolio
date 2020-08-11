import styled from 'styled-components'

export const FooterElement = styled.footer`
  width: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.menu};
  padding: 2rem 0;
  position: relative;
`

export const Label = styled.p`
  font-size: 1.4rem;
`

export const Up = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  background-color: #eee;
  top: -2.5rem;
  right: 5rem;
  border-radius: 100%;
  display: flex;
  cursor: pointer;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 ${({ theme }) => theme.secondColor};
    }
    70% {
      box-shadow: 0 0 0 2rem rgba(253, 87, 191, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(253, 87, 191, 0);
    }
  }

  @media screen and (max-width: 630px) {
    right: 2rem;
  }
`

export const Icon = styled.div`
  color: ${({ theme }) => theme.menu};
  font-size: 2rem;
  margin: auto;
`
