import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { RoughEase } from 'gsap/dist/EasePack'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import {
  Container,
  Headerlanding,
  TitleName,
  SubTitleName,
  ContainerAnimation,
  Box,
  Hi,
  MySkills,
  Cursor,
} from './styles'

gsap.registerPlugin(TextPlugin, RoughEase)

const HeaderLanding: React.FC = () => {
  const words = ['Renan.', 'A Father,', 'A Husband', 'A Developer']
  const refCursor = useRef(null)
  const refBox = useRef(null)
  const refHi = useRef(null)
  const refMySkills = useRef(null)
  useEffect(() => {
    let masterTl = gsap.timeline({ repeat: -1 }).pause()
    gsap.to(refCursor.current, { opacity: 0, ease: 'power2.inOut', repeat: -1 })

    gsap
      .timeline()
      .to(refBox.current, { duration: 1, width: '170px', delay: 0.5, ease: 'power4.inOut' })
      .from(refHi.current, { duration: 1, y: '6vw', ease: 'power3.out' })
      .to(refBox.current, {
        duration: 1,
        height: '5rem',
        ease: 'elastic.out',
        onComplete: () => masterTl.play(),
      })

    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
      tl.to(refMySkills.current, { duration: 1, text: word })
      masterTl.add(tl)
    })
  }, [])

  return (
    <Headerlanding>
      <Container>
        <TitleName>{`<Renan Kanu>`}</TitleName>
        <SubTitleName>Desenvolvedor Mobile</SubTitleName>
        <ContainerAnimation>
          <Box ref={refBox} />
          <Hi ref={refHi}>Hi, I'm</Hi>
          <MySkills ref={refMySkills}></MySkills>
          <Cursor ref={refCursor}>_</Cursor>
        </ContainerAnimation>
      </Container>
    </Headerlanding>
  )
}

export default HeaderLanding
