import axios from 'axios';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Hearderpofile from "../profile/Headerprofile";
import { Link } from 'react-router-dom';

const View_post_bricoleur = () => {
    const [posts, setPosts] = useState([]);

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
   <Hearderpofile />
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
                        
                            if(post.metier==null || post.metier==''){
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
                             <Link to={`Ditai_post_bricoleur/${post.user_id}/${post.id}`}><button className='button' style={{"border":"none","fontSize":"16px","color":"#FFF","padding":"8px 16px","background":"orange","borderRadius":"6px","margin":"14px","cursor":"pointer"}}>View More</button></Link>
                        </div>
                    
                
                </div>
                </SwiperSlide>

            </div>
        </div>
        
                             </>
                             } })}
        </Swiper>
                <div className='swiper-button-next' style={{"color":"orange","fontWeight":"bold"}}></div>
                <div className='swiper-button-prev'style={{"color":"orange","fontWeight":"bold"}}></div>
                <div className='swiper-pagination'style={{"color":"orange","fontWeight":"bold"}}></div>
        </body>
    </>
  )
}


export default View_post_bricoleur