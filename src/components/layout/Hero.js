import React from 'react';
import { Parallax } from 'react-parallax';

import Hero3000 from '../../images/hero/peep-eats-hero-3000.png';
import Hero1800 from '../../images/hero/peep-eats-hero-1800.png';
import Hero800 from '../../images/hero/peep-eats-hero-800.png';
import Hero400 from '../../images/hero/peep-eats-hero-400.png';

const Hero = () => {
  return (
    <Parallax blur={0} bgImage={Hero1800} strength={200}>
      <div className='hero'></div>
    </Parallax>
  );
};

export default Hero;
