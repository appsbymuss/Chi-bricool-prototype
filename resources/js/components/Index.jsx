import React from 'react';
import Contact from './contact/Contact';
import Hero from './hero/Hero' ;
import Who from './about us/Who';
import styled from 'styled-components';
import Developers from './about us/developedBy';
import HouseSection from './hero/HouseSection';
import './il8n'

const Container = styled.div`
  height: 100vh;

  scroll-behavior: smooth;
  overflow-y: auto;
;
  color: white;
  background: orange;
  &::-webkit-scrollbar{
    display: none;
  }
`;

const Index = () => {
    return (
      <Container>
        <Hero />
        <HouseSection/>
        <Who/>
        <Developers/>
        <Contact />
      </Container>
    );
}

export default Index;
