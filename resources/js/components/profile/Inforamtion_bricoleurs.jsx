import { useParams } from "react-router-dom"
import HeaderD from "./HeaderD";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Inforamtion_bricoleurs = () => {
    const id_b = useParams()
    console.log(id_b.id)
    const [Bricoleurs, setBricoleurs] = useState([]);
    const [BricoleursP, setBricoleursP] = useState([]);

    useEffect(() => {
        fetchBricoleurs();
    },[])

    const fetchBricoleurs = async () =>{
        try {
            const response = await axios.get(`/api/Ditai_post_bricoleur/${id_b.id}`);
            setBricoleurs(response.data);
            console.log(Bricoleurs)
        } catch (error) {
            console.log(error)
        }

        try {
            const response = await axios.get(`/api/view_post_bricoleurr/${id_b.id}`);
            setBricoleursP(response.data);
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
        <HeaderD />
        <body className='container'>
            <div className='row'>
                <div style={{'marginTop':'80px','height':'400px','width':'88%'}} className='container crud shadow-lg p-3  mb-2  bg-body rounded col-10'>
                {
                     Bricoleurs?.map(b => (
                            // <>
                            //     <div className="row">
                            //         <div className="col-3" style={{'marginLeft':'100px','marginTop':'45px'}}>
                            //             <span style={{'fontWeight':'bold'}}>firstName :</span><h5 style={{'color':'orange'}}>{b.firstName}</h5>
                            //             <span style={{'fontWeight':'bold'}}>lastname :</span><h5 style={{'color':'orange'}}>{b.lastname}</h5>
                            //             <span style={{'fontWeight':'bold'}}>address :</span><h5 style={{'color':'orange'}}>{b.address}</h5>
                            //             <span style={{'fontWeight':'bold'}}>metier :</span><h5 style={{'color':'orange'}}>{b.metier}</h5>
                            //             <span style={{'fontWeight':'bold'}}>city :</span><h5 style={{'color':'orange'}}>{b.city}</h5>
                            //         </div>
                            //         <div className="col-3" style={{'marginLeft':'100px','marginTop':'45px'}}>
                            //             <Image src="./img/Handyman.png"  />
                            //         </div>
                            //     </div>
                            // </>

                <div className="row d_flex justifiy-content-center" style={{'marginLeft':'150px','marginTop':'50px'}}>
                        <div className="col-md-10">
                            <div className="row z-depth-3">
                                <div className="col-sm-4 bg-info rounded-left">
                                <div className="card-black text-center text-white">
                                    <i className="fas fa-user-tie fa-7x mt-5"></i>
                                    <h2 className="font-weight-bold mt-4">{b.firstName}</h2>
                                    {/* <i className="far fa-edit fa-2x mb-4"></i> */}
                                </div>
                                </div>
                                <div className="col-sm-8 bg-white rounded-right" >
                                <h3 className="mt-3 text-center"><i>Information</i></h3>
                                <hr style={{'marginLeft':'198px'}} className="badge-primary mt-0 w-25"/>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold ">Email:</p>
                                        <h6 className="text-muted">{b.email}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold ">Name:</p>
                                        <h6 className="text-muted">{b.firstName} {b.lastname}</h6>
                                    </div>
                                </div>
                                {/* <h4 style={{'marginLeft':'70px'}} className="mt-3">Posts</h4> */}
                                <hr className="bg-primary"/>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="font-weight-bold ">City:</p>
                                        <h6 className="text-muted">{b.city}</h6>
                                    </div>
                                    <div className="col-sm-4">
                                        <p className="font-weight-bold ">Address:</p>
                                        <h6 className="text-muted">{b.address}</h6>
                                    </div>
                                    <div className="col-sm-4">
                                        <p className="font-weight-bold ">Metier:</p>
                                        <h6 className="text-muted">{b.metier}</h6>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            
                                </div>
                      </div>
                  </div>
              </div>
                        ))
                        }

</div>
                <Div className='container crud shadow-lg p-3  mb-2  bg-body rounded col-6'> 

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
                     BricoleursP?.map(bb => (
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
                                        <h2 className='name' style={{"fontSize":"25px","fontWeight":"bold","color":"#66b3ff"}}>{bb.title}</h2>
                                        <p className='description' style={{"fontSize":"14px","color":"#707070","textAlign":"center"}}>
                                            {bb.description}
                                        </p>
                                        <p style={{"color":"#707070"}}>{bb.date}</p>
                                    </div>
                                </div>
                            </>

                </SwiperSlide>
                        </div>
                        </div>

                        
                                    ))
                                }
                </Swiper>
                <div className='swiper-button-next' style={{"color":"#66b3ff","fontWeight":"bold"}}></div>
                <div className='swiper-button-prev'style={{"color":"#66b3ff","fontWeight":"bold"}}></div>
                <div className='swiper-pagination'style={{"color":"#66b3ff","fontWeight":"bold"}}></div>
                 </Div>
            </div>
        </body>
    </>
  )
}

export default Inforamtion_bricoleurs

const Div = styled.div`
    margin-top:40px;
    heright: 460px;
    width: 88%;
`