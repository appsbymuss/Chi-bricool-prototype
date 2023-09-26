import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

import Swal from 'sweetalert2'

import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Admin_Del_posts_bricoleur = () => {
    const id = useParams()
    console.log(id.id)
    const [bricoleurP, setBricoleurP] = useState([]);

    useEffect(() => {
        fetchPostsBricoleur();
    },[])

    const fetchPostsBricoleur = async () =>{

        try {
            const response = await axios.get(`/api/view_post_bricoleurr/${id.id}`);
            setBricoleurP(response.data);
            console.log(bricoleurP)
        } catch (error) {
            console.log(error)
        }
    }


    const deletepost  = (idp) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async(result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete(`/api/delet_post_bricoleur/${idp}`);
                    fetchPostsBricoleur()
                    Swal.fire(
                        'Deleted!',
                        res.data.message,
                        'success'
                      )
                } catch (error) {
                    console.log(error)
                }
            }
        });
    

    }
  return (
    <>
    <Link to={'/Admin_view_delete_bricoleurs'}><button style={{'borderRadius':'5px','padding':'10px','border':'none','fontWeight':'bold','background':'#66b3ff','float':'right','marginTop':'-90px','marginRight':'90px'}}>Posts bricoleurs</button></Link>

            <Div className='container crud  p-3  mb-2 bg-body rounded col-6'> 

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
                        bricoleurP.map(bri=>(
                            <>
                    <div className='slide-container' style={{"maxWidth":"1120px","width":"100%","padding":"80px 80px","margin":"0 40px", "overflow":"hidden"}}>

                        <div className='slide-content' style={{"margin":"80 40px","padding":"45px 20px"}} >
                            <SwiperSlide>
                                        <>

                                            <div className='card-wrapper' style={{"background-color":"#EFEFEF","borderRadius":"25px"}}>
                                                <div className='image-content'  style={{"padding":"25px 14px", "display":"flex", "flexDirection":"column", "alignItems":"center","rowGap":"5px","position":"relative"}}>
                                                    <span className='overlay' style={{"position":"absolute","height":"100%","width":"100%","background":"#66b3ff","left":"0","top":"0","borderRadius":"25px 25px 0 25px"}}></span>

                                                    <div className='card-image' style={{"position":"relative","height":"200px","width":"300px","background":"#EFEFEF","padding":"3px","borderRadius":"25px"}}>
                                                                <img src='' className='card-img' style={{'height':"100%","width":"100%","objectFit":"cover","border":"4px solid #66b3ff"}}/>
                                                            </div>
                                                </div>
                                                <div className='card-content' style={{"padding":"14px 14px","display":"flex", "flexDirection":"column", "alignItems":"center"}}>
                                                    <h2 className='name' style={{"fontSize":"25px","fontWeight":"bold","color":"#66b3ff"}}>{bri.title}</h2>
                                                    <p className='description' style={{"fontSize":"14px","color":"#707070","textAlign":"center"}}>
                                                        {bri.description}
                                                    </p>
                                                    <p style={{"color":"#707070"}}>{bri.date}</p>
                                                </div>
                                                <i class="fa fa-trash" aria-hidden="true"
                                                    style={{"marginLeft":"185px","marginBottom":"15px", "color":"#f50505","fontSize":"30px"}}
                                                    onClick={()=>deletepost(bri.id)}>
                                                </i>
                                            </div>

                                        </>

                            </SwiperSlide>
                        </div>
                    </div>

                    </>
                                ))
                            }
            </Swiper>
            <div className='swiper-button-next' style={{"color":"#66b3ff","fontWeight":"bold"}}></div>
            <div className='swiper-button-prev'style={{"color":"#66b3ff","fontWeight":"bold"}}></div>
            <div className='swiper-pagination'style={{"color":"#66b3ff","fontWeight":"bold"}}></div>
            </Div>

    </>
  )
}

export default Admin_Del_posts_bricoleur

const Div = styled.div`
    margin-top:120px;
    heright: 460px;
    width: 88%;
`