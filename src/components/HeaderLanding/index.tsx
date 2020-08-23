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
  const words = ['Bem vindo.', 'Sou Renan 🤘🏾']
  const refCursor = useRef(null)
  const refBox = useRef(null)
  const refHi = useRef(null)
  const refMySkills = useRef(null)
  useEffect(() => {
    let enterTml = gsap.timeline({ repeat: -1 }).pause()
    gsap.to(refCursor.current, { opacity: 0, ease: 'power2.inOut', repeat: -1 })

    gsap
      .timeline()
      .to(refBox.current, { duration: 1, width: '10.5vw', delay: 0.5, ease: 'power4.inOut' })
      .from(refHi.current, { duration: 1, y: '4.7vw', ease: 'power3.out' })
      .to(refBox.current, {
        duration: 1,
        height: '6vw',
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
      tl.to(refMySkills.current, { duration: 2, text: word })
      enterTml.add(tl)
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
          <MySkills ref={refMySkills}></MySkills>
          <Cursor ref={refCursor}>_</Cursor>
        </ContainerAnimation>
      </Container>
    </Headerlanding>
  )
}

export default HeaderLanding
