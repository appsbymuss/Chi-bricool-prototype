import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import HeaderD from '../profile/HeaderD';




const Ditai_post_client = () => {
    const {id_client,id} = useParams();
    const [client, setClient] = useState([])
    console.log(id_client,id)

    useEffect(()=>{
        fetchPost();
      },[])

      const fetchPost = async () =>{
        try {
            const response = await axios.get(`/api/Ditai_post_client/${id}`);
            setClient(response.data)
        } catch (error) {
            console.log(error);
        }
      }
    
  return (
    <>
      <HeaderD/>

{
                     client?.map(cli => (
                            <>

        <div className="row d_flex justifiy-content-center" style={{'marginLeft':'180px',"marginTop":'100px'}}>
                  <div className="col-md-10">
                      <div className="row z-depth-3">
                        <div className="col-sm-4 bg-info rounded-left">
                          <div className="card-black text-center text-white">
                              <i className="fas fa-user-tie fa-7x mt-5"></i>
                              <h2 className="font-weight-bold mt-4">{cli.firstName}</h2>
                              {/* <i className="far fa-edit fa-2x mb-4"></i> */}
                          </div>
                        </div>
                        <div className="col-sm-8 bg-white rounded-right" >
                          <h3 className="mt-3 text-center"><i>Information Client</i></h3>
                          <hr style={{'marginLeft':'272px'}} className="badge-primary mt-0 w-25"/>
                          <div className="row">
                              <div className="col-sm-6">
                                <p className="font-weight-bold ">Email:</p>
                                <h6 className="text-muted">{cli.email}</h6>
                              </div>
                              <div className="col-sm-6">
                                <p className="font-weight-bold ">Name:</p>
                                <h6 className="text-muted">{cli.firstName}{cli.lastname}</h6>
                              </div>
                          </div>
                          {/* <h4 style={{'marginLeft':'70px'}} className="mt-3">Posts</h4> */}
                          <hr className="bg-primary"/>
                          <div className="row">
                              <div className="col-sm-5">
                                <p className="font-weight-bold ">City:</p>
                                <h6 className="text-muted">{cli.city}</h6>
                              </div>
                              <div className="col-sm-5">
                                <p className="font-weight-bold ">Address:</p>
                                <h6 className="text-muted">{cli.address}</h6>
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
    </>
  )
}

export default Ditai_post_client
