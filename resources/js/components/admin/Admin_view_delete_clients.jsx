import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hearderpofile from "../profile/Headerprofile";
import { Link } from 'react-router-dom';

import { useTranslation } from "react-i18next";

const Admin_view_delete_clients = () => {
    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState("")

    const [t, il8n] = useTranslation()

    useEffect(() => {
            fetchClients();
    },[search])

    const fetchClients = async () =>{
        try {
            if(search){
                const response = await axios.get(`/api/search_C/${search}`);
                setClients(response.data);
            }else{
                const response = await axios.get('/api/view_client');
                 setClients(response.data);
            }

        } catch (error) {
            console.log(error)
        }

    }
            
    const deleteclient  = (id_client) =>{
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
                    const res = await axios.delete(`/api/view_del_client/${id_client}`);
                    fetchClients()
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
    <Hearderpofile />
      <div className='container' >
    <div className='p-2 mt-4'  style={{"color":"orange","font-family":"Arail Black"}}>
            <h1 style={{'fontWeight':'bold'}}>{t('Admin_View_Clients')}</h1>
    </div>
        <div className='crud shadow-lg p-3 mb-2 mt-2 bg-body rounded'>
            <div className='row'>
                <div className='row my-3'>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <input type='text' placeholder={t('Admin_Search')} value={search} onChange={(e)=>{setClients(null);setSearch(e.target.value)}} className='form-control' />
                        </div>
                    </div>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">{t('Profile_id')}</th>
                        <th scope="col">{t('form_FirstName')}</th>
                        <th scope="col">{t('form_LastName')}</th>
                        <th scope="col">{t('form_Email')}</th>
                        <th scope="col">{t('form_Address')}</th>
                        <th scope="col">{t('form_City')}</th>
                        <th scope="col">{t('Profile_Action')}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        clients?.map(client => {
                            if(client.role==='client'){
                                return <>
                            <tr key={client.id}>
                                <td>{client.id}</td>
                                <td>{client.firstName}</td>
                                <td>{client.lastname}</td>
                                <td>{client.email}</td>
                                <td>{client.address}</td>
                                <td>{client.city}</td>
                                <td>
                                        <i class="fa fa-trash" aria-hidden="true"
                                        style={{"marginRight":"25px", "color":"#f50505","fontSize":"30px"}}
                                        onClick={()=>deleteclient(client.id)}>
                                        </i>
                                        <Link to={`delete_posts_clients/${client.id}`}><button>{t('Profile_Posts')}</button></Link>
                                </td>
                            </tr>
                            </>  
                            }  
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default Admin_view_delete_clients
