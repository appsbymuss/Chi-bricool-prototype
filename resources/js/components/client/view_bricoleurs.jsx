import axios from 'axios';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const View_bricoleurs = () => {
    const [Bricoleurs, setBricoleurs] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetchBricoleurs();
    },[search])
    const fetchBricoleurs = async () =>{
        if(search){
            const response = await axios.get(`/api/search_BBB/${search}`);
            setBricoleurs(response.data);
        }else{
            const response = await axios.get('/api/view_bricoleur');
            setBricoleurs(response.data);
        }
    }
  return (
    <>
    <Section>
      <Container>
        <Links>
          <Link to={'/'}><Logo src="./img/logo.png" /></Link>
          <List>
            <Link style={{'textDecoration':'none','list-style':'none'}} to={"/"}><ListItem style={{'color':'black','fontSize':'16px'}}>Home</ListItem></Link>
            <Link style={{'textDecoration':'none','list-style':'none'}} to={"/about"}><ListItem style={{'color':'black','fontSize':'16px'}}>About</ListItem></Link>
            <Link style={{'textDecoration':'none','list-style':'none'}} to={'/choiser_Announce'}><ListItem style={{'color':'black','fontSize':'16px'}}>Choise_Announce</ListItem></Link>
          </List>
        </Links>
        <Icons>
        </Icons>
      </Container>
    </Section>
        <div className='container'>
            <div className='row my-3'>
                <div className='col-md-4'>
                    <div className='form-group'>
                        <input type='text' placeholder='Serach "Metier Bricoleur".....' value={search} onChange={(e)=>{setBricoleurs(null);setSearch(e.target.value)}} className='form-control' />
                    </div>
                </div>
            </div>
        </div>
    <body style={{'marginTop':'20px','height':'540px','width':'88%'}}  className='container crud  p-3  mb-2  bg-body rounded col-6'>
    <Swiper
      spaceBetween={45}
      slidesPerView={4}
      loop={true}
      centerSlide={true}
      fade={true}
      grabCursor={true}
      navigation={{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}
      pagination={{ clickable: true, el:".swiper-paginastion" , dynamicBullets:true}}
      breakpoints={{
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        900:{
            slidesPerView: 3,
        },
      }}

    >
        {
                        Bricoleurs?.map(bricoleur => {
                          if(bricoleur.role=='bricoleur'){
                            return <>

                            
        <div className='slide-container' style={{"maxWidth":"1120px","width":"100%","padding":"80px 80px","margin":"0 40px", "overflow":"hidden"}}>
                
            <div className='slide-content' style={{"margin":"80 40px","padding":"45px 20px"}} >
            <SwiperSlide>
                <div className='card-wrapper' style={{"background-color":"#EFEFEF","borderRadius":"25px"}}>
                
                        <div className='image-content'  style={{"padding":"25px 14px", "display":"flex", "flexDirection":"column", "alignItems":"center","rowGap":"5px","position":"relative"}}>
                            <span className='overlay' style={{"position":"absolute","height":"100%","width":"100%","background":"orange","left":"0","top":"0","borderRadius":"25px 25px 0 25px"}}></span>

                            <div className='card-image' style={{"position":"relative","height":"200px","width":"300px","background":"#EFEFEF","padding":"3px","borderRadius":"25px"}}>
                                <img src='' className='card-img' style={{'height':"100%","width":"100%","objectFit":"cover","border":"4px solid orange"}}/>
                            </div>
                        </div>

                        <div className='card-content' style={{"padding":"14px 14px","display":"flex", "flexDirection":"column", "alignItems":"center"}}>
                            <h2 className='name' style={{"fontSize":"25px","fontWeight":"bold","color":"orange"}}>{bricoleur.firstName}</h2>
                            <h5 className='description'>
                                Lastname : <span style={{'color':'orange',"fontWeight":"bold"}}>{bricoleur.lastname}</span>
                             </h5> 
                             <h5>Metier : <span style={{'color':'blue',"fontWeight":"bold"}}>{bricoleur.metier}</span></h5>
                             <h5>City : <span style={{'color':'orange',"fontWeight":"bold"}}>{bricoleur.city}</span></h5>
                             <h5>Address : <span style={{'color':'orange',"fontWeight":"bold"}}>{bricoleur.address}</span></h5>
                             <Link to={`/information_bricoleur/${bricoleur.id}`}><button className='button' style={{"border":"none","fontSize":"16px","color":"#FFF","padding":"8px 16px","background":"orange","borderRadius":"6px","margin":"14px","cursor":"pointer"}}>View More</button></Link>
                        </div>
                </div>
                </SwiperSlide>
            </div>
        </div>
        </>
      }  })}
        </Swiper>
                <div className='swiper-button-next' style={{"color":"orange","fontWeight":"bold"}}></div>
                <div className='swiper-button-prev'style={{"color":"orange","fontWeight":"bold"}}></div>
                <div className='swiper-pagination'style={{"color":"orange","fontWeight":"bold"}}></div>
        </body>
    </>
  )
}


export default View_bricoleurs