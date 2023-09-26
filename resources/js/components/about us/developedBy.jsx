import React from 'react';
import styled, { keyframes } from 'styled-components';

import { useTranslation } from "react-i18next";

const DevelopersWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Developer = styled.div`
  width: 400px;
  height: 700px;
  margin: 20px;
  background-color: #2c065d;
  border-radius: 10px; 
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;
  animation: ${props => props.animate ? grow : ''} 0.5s ease-in-out forwards;
  transition: all 0.2s ease-in-out;
  background: linear-gradient(90deg, #2c065d 0%, #6a0572 100%)
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 5px 20px rgba(3, 138, 255, 1);
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin: 10px;
  }
`;

const DeveloperImageWrapper = styled.div`
  width: 100%;
  height: 480px;
  overflow: hidden;
  position: relative;
  &:hover img {
    transform: scale(1.2);
    filter: blur(5px);
  }
`;


const DeveloperImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
`;
const DeveloperTitle = styled.h1`
  font-size: 20px;
  margin: 0;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: ${props => props.animate ? slideIn : ''} 0.5s ease-in-out forwards;
  z-index: 1;
`;




const DeveloperDescription = styled.p`
  font-size: 16px;
  margin: 20px;
  opacity: 0;
  animation: ${props => props.animate ? fadeIn : ''} 0.5s ease-in-out forwards;
`;

const grow = keyframes`
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-50%) translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Developers = () => {
  const [t, il8n] = useTranslation()

  return (
    <DevelopersWrapper>
      <Developer animate={true} onClick={() => window.location.href='https://www.linkedin.com/in/mustapha-el-idrissi-308bb2268/'}>
        <DeveloperImageWrapper>
          <DeveloperImage src=".\img\muss.JPG" />
        </DeveloperImageWrapper>
        <DeveloperTitle animate={true}>{t('develop_muss')}</DeveloperTitle>
        <DeveloperDescription animate={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </DeveloperDescription>
      </Developer>
</DevelopersWrapper>
);
}

export default Developers;


