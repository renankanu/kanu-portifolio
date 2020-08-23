import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { RoughEase } from 'gsap/dist/EasePack'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
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
  ScrollDown,
  Mouse,
  ArrowContainer,
  DotMouse,
  ArrowIcon,
} from './styles'

gsap.registerPlugin(TextPlugin, RoughEase, ScrollToPlugin)

const HeaderLanding: React.FC = () => {
  const words = ['Bem vindo.', 'Sou Renan 🤘🏾']
  const refCursor = useRef(null)
  const refBox = useRef(null)
  const refHi = useRef(null)
  const refWelcome = useRef(null)
  const refMouseScroll = useRef(null)
  const refArrowDown = useRef(null)
  useEffect(() => {
    let enterTml = gsap.timeline({ repeat: -1 }).pause()
    gsap.to(refCursor.current, { opacity: 0, ease: 'power2.inOut', repeat: -1 })

    gsap
      .timeline()
      .to(refBox.current, { duration: 1, width: '8.5vw', delay: 0.5, ease: 'power4.inOut' })
      .from(refHi.current, { duration: 1, y: '3.7vw', ease: 'power3.out' })
      .to(refBox.current, {
        duration: 1,
        height: '4vw',
        ease: 'elastic.out',
        onComplete: () => enterTml.play(),
      })
      .to(refBox.current, {
        duration: 2,
        autoAlpha: 0.7,
        yoyo: true,
        repeat: -1,
        ease:
          "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})",
      })

    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2 })
      tl.to(refWelcome.current, { duration: 2, text: word })
      enterTml.add(tl)
    })

    gsap.to(refArrowDown.current, {
      duration: 1,
      y: '6px',
      ease: 'power2.inOut',
      repeat: -1,
    })
  }, [])

  return (
    <Headerlanding>
      <Container>
        <TitleName>{`<Renan Kanu>`}</TitleName>
        <SubTitleName>Desenvolvedor Mobile</SubTitleName>
        <ContainerAnimation>
          <Box ref={refBox} />
          <Hi ref={refHi}>Eaê!</Hi>
          <MySkills ref={refWelcome}></MySkills>
          <Cursor ref={refCursor}>_</Cursor>
        </ContainerAnimation>
      </Container>
      <ScrollDown
        onClick={() => {
          gsap.to(window, { duration: 1, scrollTo: { y: '#about' }, ease: 'back.out' })
        }}
      >
        <Mouse>
          <DotMouse ref={refMouseScroll} />
        </Mouse>
        <ArrowContainer ref={refArrowDown}>
          <ArrowIcon />
        </ArrowContainer>
      </ScrollDown>
    </Headerlanding>
  )
}

export default HeaderLanding
