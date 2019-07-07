import React from 'react';
import MainHero from './MainHero';
import News from './News';
import Challenge from './Challenge';

function Home() {
  return (
    <div className="Main">
      <MainHero />
      <News />
      <Challenge />
    </div>
  )
}

export default Home; 