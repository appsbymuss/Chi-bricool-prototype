import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  background:  ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
 
`;


const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  height: 45px;
  margin-left: 100px;
 

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  margin-top: 20px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;


const Button = styled.button`
  width: 110px;
  padding: 10px;
  background-color: #4169e1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 80px;
 
`;


const HeaderD = () => {
  const [t, il8n] = useTranslation()

  return (
    <Section>
      <Container>
        <Links>
          <List>
            <Link style={{'textDecoration':'none','list-style':'none'}} to={"/"}><ListItem style={{'color':'black','fontSize':'18px'}}>{t('Home')}</ListItem></Link>
            <Link style={{'textDecoration':'none','list-style':'none'}} to={"/view_bricoleurs"}><ListItem style={{'color':'black','fontSize':'18px'}}>{t('Search')}</ListItem></Link>
            <Link style={{'textDecoration':'none','list-style':'none'}} to={'/choiser_Announce'}><ListItem style={{'color':'black','fontSize':'18px'}}>{t('Choise_Announce')}</ListItem></Link>
          </List>
        </Links>
        <Icons>    
          { il8n.language == 'fr' && <button style={{"width":"50px","border":"none","padding":"6px","borderRadius":"5px","fontWeight":"bold",'background':'orange','marginRight':'70px'}} onClick={()=> {il8n.changeLanguage('ar')}}>AR</button>}
          {il8n.language == 'ar' && <button style={{"width":"50px","border":"none","padding":"6px","borderRadius":"5px","fontWeight":"bold",'background':'orange','marginRight':'70px'}} onClick={()=> {il8n.changeLanguage('fr')}}>FR</button>}
        </Icons>
      </Container>
    </Section>
  );
};

export default HeaderD;