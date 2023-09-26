import React from 'react';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import 'bootstrap/dist/css/bootstrap.min.css'
import Scene from './House';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin : 0px auto 10px auto;
`;

const LeftDiv = styled.div`
  flex: 1;
  width: 1000px;
  height: 1000px;
  margin : 140px auto 10px auto;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const RightDiv = styled.div`
  flex: 1;
  width: 100%;
  max-width: 600px;
  height: 800px;
  padding: 2rem;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: none;
    height: auto;
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  margin-left: 155px;
  color : purple ;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 24px;
  text-align: justify;

  text-shadow : 1px 1px rgba(0, 0, 0,0.5) ;
`;

const HouseSection = () => {
  const [t, il8n] = useTranslation()
  return (
    <div className=''>
    <Container>
      <LeftDiv>
        <Suspense fallback={null}>
          <Canvas shadows flat linear>
            <Scene /> 
            <OrbitControls />
          </Canvas>
        </Suspense>
      </LeftDiv>
      <RightDiv>
        <Title>{t('HouseSection_title')} </Title>
        <Paragraph>{t('HouseSection_p_1')}<br/>
        {t('HouseSection_p_2')}
</Paragraph>
<Link to={'/about'}><Button>{t('HouseSection_button')}</Button></Link>
{/* <Paragraph>
 Mon objectif était de leur offrir une source de revenus halal, tout en leur donnant la possibilité de développer leur propre entreprise de bricolage en ligne. Avec cette plateforme, je suis convaincu que nous pouvons améliorer les moyens de subsistance des bricoleurs marocains tout en leur apportant une véritable reconnaissance pour leur travail.<br/>

Nous croyons que chaque bricoleur marocain a une histoire unique à raconter, et nous voulons les aider à partager leur passion avec le monde entier. Nous voulons également que nos clients soient fiers de soutenir une communauté de travailleurs acharnés qui font preuve d'une grande créativité et de compétences exceptionnelles.

Chez notre entreprise de bricolage personne à personne, nous sommes fiers de promouvoir le travail acharné, la passion et la dignité. Rejoignez-nous aujourd'hui et faites partie d'une communauté qui célèbre l'artisanat marocain et soutient les familles à travers tout le pays.</Paragraph> */}
      </RightDiv>
    </Container>
    </div>
  );
};

export default HouseSection;


const Button = styled.button`
  margin-left: 180px;
  padding: 10px 20px;
  border-radius: 30px;
  border: none;
  background-color: #3d1c56;
  width:170px;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 2, 0.8);
    transform: translateY(-5px);
  }
  
  &:focus {
    outline: none;
  }
`;