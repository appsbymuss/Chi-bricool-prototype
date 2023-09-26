// import React, { useEffect, useState } from 'react'
// import { useParams } from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios';

// const Posts_clients_metier = () => {
//     const metier = useParams()

//     const [clientsP, setClientsP] = useState([]);

//     useEffect(() => {
//         fetchPostsClient();
//     },[])

//     const fetchPostsClient = async () =>{

//         try {
//             const response = await axios.get(`/api/view_post_client`);
//             setClientsP(response.data);
//             console.log(clientsP)
//         } catch (error) {
//             console.log(error)
//         }

//     }

//   return (
//     <>
//         {clientsP.map(m=>{
//             <p>{m.title}</p>
//         })}
//     </>
//   )
// }

// export default Posts_clients_metier



import axios from 'axios';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useParams } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from "styled-components";
import { Link } from "react-router-dom";

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



const Posts_clients_metier = () => {
    const [posts, setPosts] = useState([]);
    const metier = useParams()
    console.log(metier)
    useEffect(() => {
        fetchPostsClient();
    },[])
    const fetchPostsClient = async () =>{
        try {
            const response = await axios.get('/api/view_post_client');
            setPosts(response.data);
        } catch (error) {
            console.log(error)
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
            <Link style={{'textDecoration':'none','list-style':'none'}} to={"/view_bricoleurs"}><ListItem style={{'color':'black','fontSize':'16px'}}>Search</ListItem></Link>
            <Link style={{'textDecoration':'none','list-style':'none'}} to={'/choiser_Announce'}><ListItem style={{'color':'black','fontSize':'16px'}}>Choise_Announce</ListItem></Link>
          </List>
        </Links>
      </Container>
    </Section>
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
                        posts?.map(post => {
                          if(post.metier===metier.metier){
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
                            <h2 className='name' style={{"fontSize":"25px","fontWeight":"bold","color":"orange"}}>{post.title}</h2>
                            <p className='description' style={{"fontSize":"14px","color":"#707070","textAlign":"center"}}>
                                {post.description}
                             </p> 
                             <p style={{"color":"#707070"}}>{post.date}</p>
                             <Link to={`Ditai_post_client/${post.user_id}`}><button className='button' style={{"border":"none","fontSize":"16px","color":"#FFF","padding":"8px 16px","background":"orange","borderRadius":"6px","margin":"14px","cursor":"pointer"}}>View More</button></Link>
                        </div>
                </div>
                </SwiperSlide>
            </div>
        </div>
        </>
      }  
      })}
        </Swiper>
                <div className='swiper-button-next' style={{"color":"orange","fontWeight":"bold"}}></div>
                <div className='swiper-button-prev'style={{"color":"orange","fontWeight":"bold"}}></div>
                <div className='swiper-pagination'style={{"color":"orange","fontWeight":"bold"}}></div>
        </body>
    </>
  )
}

export default Posts_clients_metier