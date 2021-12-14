import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const imageUrl = 'https://i.picsum.photos/id/1042/3456/5184.jpg?hmac=5xr8Veg2D_kEQQO6rvGj_Yk8s_N4iq3-eZ9_KclSXNQ';

const Wrapper = styled.div`
  position: relative;
  font-family: 'Montserrat', 'Helvetica', 'Arial', 'sans-serif';
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px 50px;
`;

const Hero = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("${imageUrl}");
  background-repeat: no-repeat;
  background-size: cover;
  grid-column: 1 / 3;
  position: relative;
  overflow: hidden;

  h1 {
    margin: 0 auto;
    display: block;
    font-size: 150px;
    font-style: italic;
    font-weight: 800;
    letter-spacing: 1px;
    font-family: 'Montserrat', 'Helvetica', 'Arial', 'sans-serif';
    color: white;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 40vh;
  background-image: url("${imageUrl}");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Article = styled.article`
  position: relative;
  top: 100px;
  text-align: left;
  padding-right: 20%;

  &:last-of-type {
    text-align: right;
    padding-right: 0;
    padding-left: 20%;
  }

  h2, p {
    font-family: 'Montserrat', 'Helvetica', 'Arial', 'sans-serif';
  }

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
    line-height: 1.6;
  }
`;

const Curtain = styled.div`
  margin-bottom: 300vh;
  width: 100%;
  height: 100vh;
  grid-column: 1 / 3;
  position: relative;
  overflow: hidden;
`;

const CurtainBackground = styled.div`
  width: 1%;
  height: 100vh;
  background-color: black;
  position: absolute;
  z-index: -1;
`;

const CurtainImage = styled.img`
  width: 200%;
  height: 200%;
  transform-origin: 50% 50%;
  position: relative;
  left: -50%;
  top: -50%;
`;


const ScrollAnimations = () => {
  const hero = React.useRef(null);
  const article1 = React.useRef(null);
  const article2 = React.useRef(null);
  const image1 = React.useRef(null);
  const image2 = React.useRef(null);
  const curtain = React.useRef(null);
  const tlHero = React.useRef(null);
  const tlCurtain = React.useRef(null);

  React.useEffect(() => {
    tlHero.current = gsap.timeline({
      scrollTrigger: {
        trigger: hero.current,
        start: 'top top',
        scrub: 1,
      }
    });

    tlHero.current.to(hero.current.children[0], {letterSpacing: 500, ease: 'power3', duration: 1});

    gsap.fromTo(article1.current.children, {x: '-=150%', autoAlpha: 0}, {
      x: 0, autoAlpha: 1, duration: 1, ease: 'power3', stagger: 0.1, scrollTrigger: {
        trigger: article1.current,
        start: 'top center',
      }
    });
    gsap.fromTo(article2.current.children, {x: '+=150%', autoAlpha: 0}, {
      x: 0, autoAlpha: 1, duration: 1, ease: 'power3', stagger: 0.1, scrollTrigger: {
        trigger: article2.current,
        start: 'top center',
      }
    });
    gsap.fromTo(image1.current, {x: '+=150%', autoAlpha: 0}, {
      x: 0, autoAlpha: 1, duration: 1, ease: 'power3', stagger: 0.1, scrollTrigger: {
        trigger: image1.current,
        start: 'top center',
      }
    });
    gsap.fromTo(image2.current, {x: '-=150%', autoAlpha: 0}, {
      x: 0, autoAlpha: 1, duration: 1, ease: 'power3', stagger: 0.1, scrollTrigger: {
        trigger: image2.current,
        start: 'top center',
      }
    });

    tlCurtain.current = gsap.timeline({
      scrollTrigger: {
        trigger: curtain.current,
        start: 'top center'
      }
    })

    gsap.set(curtain.current.children[1], {autoAlpha: 0});

    tlCurtain.current
      .to(curtain.current.children[0], {width: '100%', duration: 1})
      .to(curtain.current.children[1], {autoAlpha: 1})

    gsap.to(curtain.current.children[1], {
      rotate: 45, scrollTrigger: {
        trigger: curtain.current,
        start: 'top center',
        scrub: 1,
      }
    })
  }, [])

  return (
    <Wrapper>
      <Hero ref={hero}>
        <h1>inspired</h1>
      </Hero>
      <Article ref={article1}>
        <h2>get inspired</h2>
        <p>Something has always existed. According to physics, there can never be true physical nothingness—though there
          can be times when existence resembles nothing, such as a vacuum (the state of minimum possible energy).</p>
      </Article>
      <Image ref={image1}/>
      <Image ref={image2}/>
      <Article ref={article2}>
        <h2>get inspired</h2>
        <p>Something has always existed. According to physics, there can never be true physical nothingness—though there
          can be times when existence resembles nothing, such as a vacuum (the state of minimum possible energy).</p>
      </Article>
      <Curtain ref={curtain}>
        <CurtainBackground/>
        <CurtainImage src={imageUrl}/>
      </Curtain>
    </Wrapper>
  )
};

export default ScrollAnimations