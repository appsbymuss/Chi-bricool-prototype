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
  width: 1400px;
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

const Logo = styled.img`
  height: 80px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
 

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  &:hover {
    background-color: #2c065d;
  }
`;


const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 110px;
  padding: 10px;
  background-color: #4169e1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
`;

const SearchBar = styled.input`
  width: 200px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [t, il8n] = useTranslation()

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>{t('Home')}</ListItem>
            <Link style={{'textDecoration':'none','list-style':'none'}}  to={"/about"}><ListItem  style={{'color':'white','fontSize':'16px'}}>{t('About')}</ListItem></Link>
            <Link style={{'textDecoration':'none','list-style':'none'}} to={""}><ListItem style={{'color':'white','fontSize':'16px'}}>{t('MFK')}</ListItem></Link>
            <Link style={{'textDecoration':'none','list-style':'none'}} to={'/admin'}><ListItem style={{'color':'white','fontSize':'16px'}}>{t('Admin')}</ListItem></Link>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" onClick={toggleSearchBar} />
          {showSearchBar && <SearchBar />}
         
          <Button style={{"background":"#3d1c56"}}><Link to="/login"  style={{ "textDecoration" :"none" , "color" : "white"}}>{t('Login')}</Link></Button>
          <Button style={{"background":"#3d1c56"}}><Link to="/category" style={{ "textDecoration" :"none" , "color" : "white"}}>{t('Sigan up')}</Link></Button>
          { il8n.language == 'fr' && <button style={{"width":"50px","border":"none","padding":"6px","borderRadius":"5px","fontWeight":"bold"}} onClick={()=> {il8n.changeLanguage('ar')}}>AR</button>}
          {il8n.language == 'ar' && <button style={{"width":"50px","border":"none","padding":"6px","borderRadius":"5px","fontWeight":"bold"}} onClick={()=> {il8n.changeLanguage('fr')}}>FR</button>}
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
