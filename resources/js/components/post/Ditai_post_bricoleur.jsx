import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import HeaderD from '../profile/HeaderD';
import { Link } from 'react-router-dom';





const Ditai_post_bricoleur = () => {
    const {id_bricoleur,id} = useParams();
    const [bricoleur, setBricoleur] = useState([])
    const [Post, setPost] = useState([])
    const [commontaire, setCommontaire] = useState('');
    const [name, setName] = useState('');
    const [user, setUser] = useState([])
    const [commonet, setCommonet] = useState([])

    useEffect(()=>{
        fetchcommonet();
      },[])

      const fetchcommonet = async () =>{
        try {
            const response = await axios.get(`/api/commontaire_posts/${b.id}`);
            setCommonet(response.data)
            console.log(commonet)
        } catch (error) {
            console.log(error);
        }
      }


      useEffect(() => {
        const fetchUser = async () =>{
          try{
            const response = await axios.get('/api/user',{
              headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`,
              },
            });
            setUser(response.data)
            console.log(response.data)
            setName(response.data.firstName)
          }catch(error){
            console.log(error)
          }
        };
        
      fetchUser();

    },[])


      
  const create_commontaire = async (e) =>{
    e.preventDefault();
    const commonet={
        nom:name,
        commontaire,
        id_post:id
    };
    console.log(bricoleur)
  try {
    await axios.post('/api/create_commonet', commonet);
    setCommontaire('')
    setNom('')
    console.log('add commonet post')
  } catch (error) {
    console.log(error)
  }
  }
  

    useEffect(()=>{
        fetchPost();
      },[])

      const fetchPost = async () =>{
        try {
            const response = await axios.get(`/api/Ditai_post_client/${id_bricoleur}`);
            setBricoleur(response.data)
        } catch (error) {
            console.log(error);
        }

        try {
            const response = await axios.get(`/api/post_bricoleur/${id}`);
            setPost(response.data)
            console.log(Post)
        } catch (error) {
            console.log(error);
        }
      }
    
  return (
    <>
        <HeaderD/>
        <body className='container'>
            <div className='row' style={{'height':'1000px'}}>
                <div style={{'marginTop':'60px','height':'400px','width':'88%'}} className='container crud shadow-lg p-3  mb-2  bg-body rounded col-6'>
                {/* {
                     bricoleur?.map(b => (
                            <>
                                <div className="row">
                                    <div className="col-4" style={{'marginLeft':'150px','marginTop':'110px'}}>
                                    <h4 style={{'fontWeight':'bold','padding':'4px'}}><span style={{'fontWeight':'bold','color':'orange'}}><i> FirstName :</i> </span>{b.firstName}</h4>
                                    <h4 style={{'fontWeight':'bold','padding':'4px'}}><span style={{'fontWeight':'bold','color':'orange'}}><i> Lastname : </i></span>{b.lastname}</h4>
                                    <h4 style={{'fontWeight':'bold','padding':'4px'}}><span style={{'fontWeight':'bold','color':'orange'}}><i> Address :</i> </span>{b.address}</h4>
                                    </div>
                                    <div className="col-6" style={{'marginTop':'110px'}}>
                                    <h4 style={{'fontWeight':'bold','padding':'4px'}}><span style={{'fontWeight':'bold','color':'orange'}}><i> Email : </i></span>{b.email}</h4>
                                    <h4 style={{'fontWeight':'bold','padding':'4px'}}><span style={{'fontWeight':'bold','color':'orange'}}><i> Metier :</i> </span>{b.metier}</h4>
                                    <h4 style={{'fontWeight':'bold','padding':'4px'}}><span style={{'fontWeight':'bold','color':'orange'}}><i> City : </i></span>{b.city}</h4>
                                    </div>
                                </div>
                            </>
                        ))
                        } */}
                


                {
                     bricoleur?.map(b => (
                            <>

        <div className="row d_flex justifiy-content-center" style={{'marginLeft':'180px',"marginTop":'100px'}}>
                  <div className="col-md-10">
                      <div className="row z-depth-3">
                        <div className="col-sm-12 bg-white rounded-right" style={{"marginTop":'-40px'}}>
                          <h2 className="mt-1 text-center font-weight-bold"><i>Information Bricoleur</i></h2>
                          <hr style={{'marginLeft':'289px'}} className="badge-primary mt-0 w-25"/>
                          <div className="row">
                              <div className="col-sm-6">
                                <p className="font-weight-bold ">Email:</p>
                                <h5 className="text-muted">{b.email}</h5>
                              </div>
                              <div className="col-sm-6">
                                <p className="font-weight-bold ">Name:</p>
                                <h5 className="text-muted">{b.firstName}{b.lastname}</h5>
                              </div>
                          </div>
                          {/* <h4 style={{'marginLeft':'70px'}} className="mt-3">Posts</h4> */}
                          <hr className="bg-primary"/>
                          <div className="row">
                              <div className="col-sm-6">
                                <p className="font-weight-bold ">City:</p>
                                <h5 className="text-muted">{b.city}</h5>
                              </div>
                              <div className="col-sm-6">
                                <p className="font-weight-bold ">Address:</p>
                                <h5 className="text-muted">{b.address}</h5>
                              </div>
                              <div>
                              </div>
                          </div>
                       
                        </div>
                      </div>
                  </div>
              </div>

              </>
                        ))
                        }
                
                </div>


                <div  style={{'marginTop':'-10px','height':'500px','width':'88%'}}  className='container crud shadow-lg p-3  mb-2  bg-body rounded '>
                    <div className='row'>
                    <h2 className="mt-1 text-center font-weight-bold"><i>Post Bricoleur</i></h2>
                          <hr style={{'marginLeft':'429px'}} className="badge-primary mt-0 w-25"/>
                            <div className='col-6'>
                        {
                            Post?.map(bb => (
                                    <>
                                        <div className="row">
                                            <div className="col-7" style={{'marginLeft':'140px','marginTop':'40px','paddingLeft':'10px'}}>
                                                <div className='card shadow-lg' style={{'background':'orange'}}>
                                                <div className='' style={{'padding':'21px','marginRight':'24px','marginLeft':'24px'}}>
                                                    <h5 style={{'fontWeight':'bold','padding':'4px','color':'white'}}><span style={{'fontWeight':'bold','color':'black'}}><i>Title :</i> </span>{bb.title}</h5>
                                                    <h5 style={{'fontWeight':'bold','padding':'4px','color':'white'}}><span style={{'fontWeight':'bold','color':'black'}}><i>Description : </i></span>{bb.description}</h5>
                                                    <h5 style={{'fontWeight':'bold','padding':'4px','color':'white'}}> <span style={{'fontWeight':'bold','color':'black'}}><i>Date : </i></span>{bb.date}</h5>
                                                </div>
                                                </div>
                                                <Link to={`/Commontaire_post/${bb.id}`}><button style={{"background":'orange','color':'black','fontWeight':'bold', 'borderRadius':'5px','width':'130px','marginLeft':'95px','marginTop':'15px','padding':'5px'}}>view commont</button></Link>
                                            </div>
                                        </div>
                                    </>
                                ))
                                }
                            </div>
                            <div className='col-6'>
                                <div className='container' style={{'marginTop':'10px'}}>
                                    <form>
                                    <label style={{'fontWeight':'bold','paddingBottom':'8px','fontSize':'25px','marginLeft':'100px'}}><i>Commontaire : </i></label><br/>
                                        <textarea type='text' placeholder='ecrire un comment ...' rows={8} value={commontaire} onChange={(e)=>setCommontaire(e.target.value)} style={{'width':'400px','borderRadius':'6px','border':'solid 4px black'}} /><br/>
                                        <button type='submit' onClick={(e)=>create_commontaire(e)} style={{"background":'orange','color':'black', 'borderRadius':'5px','width':'80px','fontWeight':'bold','marginLeft':'155px','marginTop':'10px','padding':'4px'}}>Send</button>
                                    </form>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            {/* <div  style={{'marginTop':'-10px','height':'500px','width':'88%'}}  className='container crud shadow-lg p-3  mb-2  bg-body rounded '>
                    <div className='row'>
                    <h2 className="mt-1 text-center font-weight-bold"><i>Commonet</i></h2>
                          <hr style={{'marginLeft':'429px'}} className="badge-primary mt-0 w-25"/>
                            <div className='col-6'>
                        {
                            Post?.map(bb => (
                                    <>
                                        <div className="row">
                                            <div className="col-12" style={{'marginLeft':'140px','marginTop':'40px','paddingLeft':'10px'}}>
                                                <div className='card shadow-lg' style={{'background':'orange'}}>
                                                <div className='' style={{'padding':'21px','marginRight':'24px','marginLeft':'24px'}}>
                                                    <h5 style={{'fontWeight':'bold','padding':'4px','color':'white'}}><span style={{'fontWeight':'bold','color':'black'}}><i>Title :</i> </span>{bb.title}</h5>
                                                    <h5 style={{'fontWeight':'bold','padding':'4px','color':'white'}}><span style={{'fontWeight':'bold','color':'black'}}><i>Description : </i></span>{bb.description}</h5>
                                                    <h5 style={{'fontWeight':'bold','padding':'4px','color':'white'}}> <span style={{'fontWeight':'bold','color':'black'}}><i>Date : </i></span>{bb.date}</h5>
                                                </div>
                                                </div>
                                                <Link to={`/Commontaire_post/${bb.id}`}><button style={{"background":'orange','color':'black','fontWeight':'bold', 'borderRadius':'5px','width':'130px','marginLeft':'95px','marginTop':'15px','padding':'5px'}}>view commont</button></Link>
                                            </div>
                                        </div>
                                    </>
                                ))
                                }
                            </div>
                    </div> */}
                {/* </div> */}
        </body>

    </>
  )
}

export default Ditai_post_bricoleur