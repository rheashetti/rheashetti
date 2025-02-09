import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home: React.FC = () => {

  return (
    <section id="home">
        <TypeAnimation
            sequence={['Welcome!', 5000, '']}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            speed={10}
            style={{ color: 'rgb(255, 209, 209)', fontSize: '2em' }}
        />
        <h4>  yap </h4>
    </section>
  );
};

export default Home;