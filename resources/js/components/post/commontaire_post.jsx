import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import HeaderD from '../profile/HeaderD';
import { Link } from 'react-router-dom';


const Commontaire_post = () => {
    const id_commont = useParams();
    const [commonet, setCommonet] = useState([])

    useEffect(()=>{
        fetchcommonet();
      },[])

      const fetchcommonet = async () =>{
        try {
            const response = await axios.get(`/api/commontaire_posts/${id_commont.id}`);
            setCommonet(response.data)
            console.log(commonet)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
    <div className='container'style={{}}>
    <h1 style={{'marginLeft':'420px','marginTop':'60px','fontWeight':'bold','fontSize':'72px','color':'orange'}}><i>Comments</i></h1>
    {
        commonet?.map(m =>(
            <>
                <div class="container" style={{'marginLeft':'290px'}}>
                    <div class="row">
                        <iv class="col-sm-5 col-md-6 col-12 pb-4">
                            <div class="card mt-4 text-justify float-left" style={{'paddingLeft':'35px','paddingTop':'25px'}}>
                                <h4 style={{'fontWeight':'bold','color':'orange'}}>{m.nom}</h4>
                                <span style={{'fontWeight':'bold'}}>{m.created_at}</span>
                                <p style={{'fontWeight':'bold'}}>{m.commontaire}</p>
                            </div>
                        </iv>
                    </div>
                </div>
             </>
            ))
        }
        <Link to={'/view_post_bricoleur'}><button style={{'fontWeight':'bold',"borderRadius":"4px",'width':'190px','background':'orange','color':'white','marginLeft':'506px','height':'35px'}}>View post bricoleur</button></Link>
    </div>
    </>
  )
}

export default Commontaire_post
