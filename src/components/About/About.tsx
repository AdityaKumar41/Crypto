import React from 'react'
import { SVGMaskEffectDemo } from './SVGMaskEffect'
import {HeroScroll} from '../ScrollAnimation/HeroScroll'
// import { CardHoverEffectDemo } from '../Card-Effect/CardHoverEffect'
import { InfiniteMovingCardsDemo } from '../Card-Effect/InfiniteMovingCards'
const About = () => {
  return (
    <>
      <SVGMaskEffectDemo />
      <HeroScroll/>
      <InfiniteMovingCardsDemo/>
    </>
  )
}

export default About;
