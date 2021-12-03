import React from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import {ReactComponent as HeroImage} from 'assets/images/hero.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;

  svg {
    width: 400px;
  }
`;

const AnimatedSvg = () => {
  const image = React.useRef(null);
  const tl = React.useRef(null);

  React.useEffect(() => {
    const {current: e} = image;
    const groundShadow = e.getElementById('ground-shadow');
    const ground = e.getElementById('ground');
    const phone = e.getElementById('phone');
    const cursor = e.getElementById('cursor');
    const linearFirst = e.getElementById('linear-first');
    const linearSecond = e.getElementById('linear-second');
    const linearThird = e.getElementById('linear-third');
    const greenBrickShadow = e.getElementById('green-brick-shadow');
    const violetBrickShadow = e.getElementById('violet-brick-shadow');
    const violetBrick = e.getElementById('violet-brick');
    const greenBrick = e.getElementById('green-brick');
    const listShadow = e.getElementById('list-shadow');
    const scaleElements = e.getElementById('scale-elements');
    const window = e.getElementById('window-top');
    const logo = e.getElementById('logo');
    const power = e.getElementById('power');

    const windowInner1 = e.getElementById('window-inner-1');
    const windowInner2 = e.getElementById('window-inner-2');
    const windowInner3 = e.getElementById('window-inner-3');
    const windowInner4 = e.getElementById('window-inner-4');

    const dot1 = e.getElementById('dot-1');
    const dot2 = e.getElementById('dot-2');
    const dot3 = e.getElementById('dot-3');
    const arrow = e.getElementById('arrow');

    const list1 = e.getElementById('list-1');
    const list2 = e.getElementById('list-2');
    const list3 = e.getElementById('list-3');
    const list4 = e.getElementById('list-4');
    const list5 = e.getElementById('list-5');
    const list6 = e.getElementById('list-6');

    const listRight = [list1, list2, list3, list4, list5, list6];
    const windowInnerElements = [windowInner1, windowInner2, windowInner3, windowInner4];
    const arrow3Dots = [arrow, dot1, dot2, dot3];

    tl.current = gsap.timeline();
    tl.current.set(
      [
        groundShadow,
        ground,
        phone,
        cursor,
        linearFirst,
        linearSecond,
        linearThird,
        greenBrickShadow,
        violetBrickShadow,
        violetBrick,
        greenBrick,
        listShadow,
        scaleElements,
        window,
        logo,
        ...listRight,
        ...windowInnerElements,
        ...arrow3Dots,
      ],
      {autoAlpha: 0}
    );

    tl.current
      .set([groundShadow, ground], {y: '+=220'})
      .set(cursor, {y: '+=400', x: '-=100'})
      .set(phone, {y: '-=100', x: '+=100'})
      .to([groundShadow, ground, cursor], {autoAlpha: 1, duration: 1})
      .to(cursor, {duration: 1, y: '-=400', x:'+=100'})
      .to([ground,groundShadow], {duration: 1, y:'-=220', stagger: 0.2}, '-=0.5')
      .to(phone, {duration: 0.5, autoAlpha: 1, y: '+=100', x: '-=100'}, '-=1.5')
      .to(cursor, {duration: 0.5, x: '+=250', y: '+=25'})
      .to(power, {duration: 0.2, fill: '#00df69'})
      .to(cursor, {duration: 0.5, x: '-=250', y: '-=25'}, '+=0.5')
      .set(linearFirst, {scaleY: 0, transformOrigin: '0 0'})
      .set(scaleElements, {scale: 0.4, transformOrigin: '0 0'})
      .to(linearFirst, {duration: 1, autoAlpha: 1, scaleY: 1}, 'cursorDone')
      .to(greenBrick, {duration: 0.4, autoAlpha: 1}, '-=0.5')
      .to(greenBrickShadow, {duration: 1, autoAlpha: 1}, '-=0.3')
      .to(scaleElements, {duration: 1, autoAlpha: 1}, '-=0.5')
      .to(linearSecond, {duration: 0.4, autoAlpha: 1}, '-=1')
      .to(scaleElements, {duration: 1.2, scale: 1}, '-=0.5')
      .to(violetBrick, {duration: 0.4, autoAlpha: 1}, '-=1.2')
      .to(violetBrickShadow, {duration: 1, autoAlpha: 1}, '-=1')
      .to(linearThird, {duration: 0.4, autoAlpha: 1}, '-=1')
      .fromTo(window, {duration: 1, autoAlpha: 0, x: '-=50'}, {autoAlpha: 1, x: '+=50'})
      .fromTo(windowInnerElements, {duration: 1.2, autoAlpha: 0, x: '-=30'}, {autoAlpha: 1, x: '+=30'}, '+=0.3')
      .fromTo(
        arrow3Dots,
        {autoAlpha: 0, x: '-=50', y: '+=20'},
        {
          autoAlpha: 1,
          x: '+=50',
          y: '-=20',
          stagger: 0.2,
          duration: 1.2,
        }
      )
      .fromTo(
        listRight[0],

        {autoAlpha: 0, x: '+=20', y: '-=20'},
        {
          duration: 0.4,
          autoAlpha: 1,
          x: '-=20',
          y: '+=20',
        },
        '-=0.1'
      )
      .fromTo(
        listRight[1],

        {autoAlpha: 0, x: '-=50', y: '+=20'},
        {
          duration: 0.4,
          autoAlpha: 1,
          x: '+=50',
          y: '-=20',
        },
        '-=0.1'
      )
      .fromTo(
        listRight[2],

        {autoAlpha: 0, x: '-=30', y: '+=20'},
        {
          duration: 0.4,
          autoAlpha: 1,
          x: '+=30',
          y: '-=20',
        },
        '-=0.1'
      )
      .fromTo(
        listRight[3],

        {autoAlpha: 0, x: '+=50', y: '+=50'},
        {
          duration: 0.4,
          autoAlpha: 1,
          x: '-=50',
          y: '-=50',
        },
        '-=0.1'
      )
      .fromTo(
        listRight[4],

        {autoAlpha: 0, x: '-=25', y: '+=40'},
        {
          duration: 0.4,
          autoAlpha: 1,
          x: '+=25',
          y: '-=40',
        },
        '-=0.1'
      )
      .fromTo(
        listRight[5],

        {autoAlpha: 0, x: '+=60', y: '-=50'},
        {
          duration: 0.4,
          autoAlpha: 1,
          x: '-=60',
          y: '+=50',
        },
        '-=0.1'
      )
      .to(listShadow, {duration: 0.5, autoAlpha: 1}, '-=1')
      .fromTo(
        logo,
        {autoAlpha: 0, x: '+=200', y: '-=100'},
        {
          duration: 1.5,
          autoAlpha: 1,
          x: '-=200',
          y: '+=100',
        },
        '-=0.5'
      );


  }, [])

  return (
    <Wrapper>
      <HeroImage ref={image}/>
    </Wrapper>
  )
};

export default AnimatedSvg