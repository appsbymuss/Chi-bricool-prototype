import axios from 'axios';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

const Interface_Client = () => {
    const [bricoleurs, setBricoleur] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetchBricoleur();
    },[search])

    const fetchBricoleur = async () =>{
        if(search){
            const response = await axios.get(`/api/search_BB/${search}`);
            setBricoleur(response.data);
        }else{
            const response = await axios.get('/api/view_bricoleur');
            setBricoleur(response.data);
        }

    }
            
  return (
    <>
      <div className='container' >
    <div className='p-2 mt-4'  style={{"color":"orange","font-family":"Arail Black"}}>
            <h1>View Bricoleurs</h1>
    </div>
        <div className='crud shadow-lg p-3 mb-5 mt-5 bg-body rounded'>
            <div className='row'>
                <div className='row my-3'>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <input type='text' placeholder='serach.....' value={search} onChange={(e)=>{setBricoleur(null);setSearch(e.target.value)}} className='form-control' />
                        </div>
                    </div>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">firstName</th>
                        <th scope="col">lastName</th>
                        <th scope="col">email</th>
                        <th scope="col">address</th>
                        <th scope="col">city</th>
                        <th scope="col">metier</th>
                        <th scope="col">Posts</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        bricoleurs?.map(bricoleur => (
                            <tr key={bricoleur.id}>
                                <td>{bricoleur.id}</td>
                                <td>{bricoleur.firstName}</td>
                                <td>{bricoleur.lastname}</td>
                                <td>{bricoleur.email}</td>
                                <td>{bricoleur.address}</td>
                                <td>{bricoleur.city}</td>
                                <td>{bricoleur.metier}</td>
                                <td>
                                    <Link to={``}><button>Post</button></Link>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default Interface_Client