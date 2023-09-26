import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.min.css'

const View_up_del_post_bricoleur = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPostsClient();
    },[])
    const fetchPostsClient = async () =>{
        try {
            const response = await axios.get('/api/view_post_bricoleur');
            setPosts(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    const deletePostBricoleur  = (id_post) =>{
        fetchPostsClient();
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
                    const res = await axios.delete(`/api/view_up_del_post_bricoleur/${id_post}`);
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
    <div className='container' >
    <div className='p-2 mt-4'  style={{"color":"orange","font-family":"Arail Black"}}>
            <h1>View _ Update _ Delet _ PostBricoleur</h1>
    </div>
        <div className='crud shadow-lg p-3 mb-5 mt-5 bg-body rounded'>
            <div className='row'>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">DESCRIPTION</th>
                        <th scope="col">DATE</th>
                        <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        posts?.map(post => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.description}</td>
                                <td>{post.date}</td>
                                <td>
                                <i class="fa fa-trash" aria-hidden="true" style={{"marginRight":"25px", "color":"#f50505","fontSize":"30px"}} onClick={()=>deletePostBricoleur(post.id)}></i>
                                    <Link to={`view_update_post_bricoleur/${post.id}`}><i class="fa-solid fa-pen-to-square" style={{"fontSize":"30px"}}></i></Link>
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

export default View_up_del_post_bricoleur