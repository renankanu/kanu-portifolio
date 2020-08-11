import React from 'react'
import { FooterElement, Label, Up, Icon } from './styles'
import { animateScroll as scroll } from 'react-scroll'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterElement>
      <Up id="up">
        <Icon
          className="fas fa-chevron-up"
          onClick={() => {
            scroll.scrollToTop()
          }}
        ></Icon>
      </Up>
      <Label>&copy; {`${new Date().getFullYear()} Renan Kanu`}</Label>
    </FooterElement>
  )
}

export default Footer
