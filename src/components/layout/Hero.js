import React from 'react';
import { Parallax } from 'react-parallax';

import Hero1800 from '../../images/hero/peep-eats-hero-1800.png';

const Hero = () => {
  return (
    <Parallax blur={0} bgImage={Hero1800} strength={200}>
      <div className='hero'></div>
    </Parallax>
  );
};

export default Hero;
