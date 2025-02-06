import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home: React.FC = () => {
  return (
    <section id="home">
        <TypeAnimation
            sequence={['Welcome!', 1000, "", 2000, 'Welcome!']}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            speed={10}
            style={{ color: 'rgb(255, 209, 209)', fontSize: '2em' }}
        />
        <h4> yap yap yap</h4>
    </section>
  );
};

export default Home;