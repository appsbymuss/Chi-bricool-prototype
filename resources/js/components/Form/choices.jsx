import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 120vh;
  gap: 50px;
  background-color: orange; /* set background color of body to orange */
`;

const BlueBox = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  box-shadow: 0px 0px 50px 10px rgba(0, 4, 3, 3);
  background-color: #053F5C; /* set background color of box to #FFC55C */
  width: 300px; /* set width of box to 300px */
  height: 600px; /* set height of box to 300px */
  border-radius: 20px ;
`;

const OrangeBox = styled(BlueBox)`
  background-color: #F7AD19; /* set background color of box to orange */
  box-shadow: 0px 0px 50px 10px rgba(0, 4, 3, 3);
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-top: -45px;
`;

const Text = styled.p`
  text-align: center;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 7px;
  border: none;
  width: 90px;
  background-color: blue;
  margin-top: 25px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 2px rgba(0, 1, 3, 3);
`;

function Choice() {
  const [t, il8n] = useTranslation()
  return (
    <>
    <Container>
      <BlueBox>
        <Image src="./img/Client.png"  />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. 
        </Text>
        <Button style={{ "color" : "white","background":"orange"}}><Link to="/create_client" style={{ "textDecoration" :"none" }}>{t('Sigan up')}</Link></Button>
      </BlueBox>

      <OrangeBox>
        <Image src="./img/Handyman.png"  />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. 
        </Text>
        <Button style={{ "color" : "white","background":"#2d2d2d"}}><Link to="/create_bricoleur" style={{ "textDecoration" :"none" , "color" : "white"}}>{t('Sigan up')}</Link></Button>
      </OrangeBox>
    </Container>
    </>
  );
}

export default Choice;

