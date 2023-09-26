import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Admin_view_delete_cli__bri = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchClients();
    },[])
    const fetchClients = async () =>{
        try {
            const response = await axios.get('/api/view_client');
            setClients(response.data);
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
        <table border="1">
            <thead>
                <tr>
                    <td>ID</td><td>Name</td><td>Email</td><td>Phone</td>
                    <td>Address</td><td>City</td><td>State</td><td>Code</td>
                </tr>
            </thead>
            <tbody>
                {
                    clients.map(cl => (
                        <tr key={cl.id}>
                            <td>{cl.name}</td>
                            <td>{cl.email}</td>
                            <td>{cl.phone}</td>
                            <td>{cl.address}</td>
                            <td>{cl.city}</td>
                            <td>{cl.state}</td>
                            <td>{cl.code}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
  )
}

export default Admin_view_delete_cli__bri
