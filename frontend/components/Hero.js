import styled from 'styled-components';

const HeroStyles = styled.ul`
  background-image: url('static/background.jpg');
  height: 100vw;
  height: 44vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin: 50px 0;
`;

const Hero = () => (
  <HeroStyles>
    <div class="hero" />
  </HeroStyles>
);

export default Hero;
