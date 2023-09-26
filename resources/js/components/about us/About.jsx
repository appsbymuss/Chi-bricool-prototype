import React from 'react'
import styled from 'styled-components';
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
  'marginLeft':'-20px'
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;



const Paragraph = styled.p`
  font-size: 24px;
  text-align: justify;
  font-weight:bold;
  padding: 40px;
  color : white ;
  text-shadow : 1px 1px rgba(0, 0, 0,0.5) ;
`;

const About = () => {
  const [t, il8n] = useTranslation()
  return (
    <>
    <body style={{'background': '',"width":"100%","height":'1000px'}}>
    <Section>
      <Container>
        <Links>
          <Link to={'/'}><Logo src="./img/logo.png" /></Link>
          <List>
            <Link style={{'textDecoration':'none','list-style':'none'}} to={"/"}><ListItem style={{'color':'black','fontSize':'16px'}}>{t('About')}</ListItem></Link>
            <Link style={{'textDecoration':'none','list-style':'none'}} to={""}><ListItem style={{'color':'black','fontSize':'16px'}}>{t('MFK')}</ListItem></Link>
            <Link style={{'textDecoration':'none','list-style':'none'}} to={'/login'}><ListItem style={{'color':'black','fontSize':'16px'}}>{t('Login')}</ListItem></Link>
            <Link style={{'textDecoration':'none','list-style':'none','width':'80px'}} to={'/category'}><ListItem style={{'color':'black','fontSize':'16px'}}>{t('Sigan up')}</ListItem></Link>
          </List>
        </Links>
        { il8n.language == 'fr' && <button style={{"width":"50px","border":"none","padding":"6px","borderRadius":"5px","fontWeight":"bold",'background':'orange','marginLeft':'930px'}} onClick={()=> {il8n.changeLanguage('ar')}}>AR</button>}
          {il8n.language == 'ar' && <button style={{"width":"50px","border":"none","padding":"6px","borderRadius":"5px","fontWeight":"bold",'background':'orange','marginLeft':'930px'}} onClick={()=> {il8n.changeLanguage('fr')}}>FR</button>}
        <Icons>
        </Icons>
      </Container>
    </Section>
        <body className='container'>
            <div className='row' style={{'height':'1000px'}}>
                <div style={{'marginTop':'10px','height':'1010px','width':'68%','background':'orange'}} className='container crud shadow-lg p-3  mb-2  rounded col-10' >
                <Paragraph className='container'>
                {t('about_p_1')}
                  <br/>
                  {t('about_p_2')}
                  <br/>
                  {t('about_p_3')}
                  </Paragraph>
                </div>
            </div>
        </body>

        </body>
    </>
  )
}

export default About
