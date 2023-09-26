

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css'

import { useTranslation } from "react-i18next";

import { Modal, ModalHeader,ModalBody } from "reactstrap";
import { use } from "i18next";



// import UserInfo from "./profile/userinfo";


// const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

const FormWrapper = styled.div`
  width: 200px;
  padding: 40px;
`;


const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  width: 400px;
  background-color: orange;
  color: white;
  margin-left: 500px;

  &:hover {
    background-color: orange;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }
`;



const Button = styled.button`
  padding: 10px 20px;
  border-radius: 30px;
  border: none;
  background-color: orange;
  width:120px;
  color: Black;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  
  &:hover {
    background-color: #ef5b3f;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
    transform: translateY(-5px);
  }
  
  &:focus {
    outline: none;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 750px;
  margin-top: -20px;
`;


const Profile_Bricoleur = () => {
  const [user, setUser] = useState([])
  const [id_p, setId_p] = useState('')
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate()

  const [t, il8n] = useTranslation()

  const [modal, setModal] = useState(false)
  const [er, seter] = useState('')


  useEffect(() => {
    const fetchUser = async () =>{
      try{
        const response = await axios.get('/api/user',{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`,
          },
          
        });
        setUser(response.data)
        console.log(user.id)

      }catch(error){
        console.log(error)
      }
    };
    fetchUser();
    },[])


const afficher = (id) =>{
  setId_p(id)
}

    useEffect(() => {
        fetchPostsBricoleur();
    },[id_p])

    const fetchPostsBricoleur = async () =>{
        try {
            const respons = await axios.get(`/api/view_post_bricoleurr/${id_p}`);
            if(id_p!==''){
              setPosts(respons.data);
        }
              console.log(posts)
        } catch (error) {
            console.log(error)
        }

    }

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    metier: user.metier,
    date : Date(),
    user_id: user.id
  });


  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  }

  // const create_post_Bricoleur = async () =>{
  //   const bricoleurr={
  //     ...formData ,
  //   };  



  // try {
  //   await axios.post('/api/create_post_user', bricoleurr);
  //   console.log('add post bricoleur')
  //   setModal(false)
  //   setFormData({title:'',description:'',date:''})
  // } catch (error) {
  //   console.log(error)
  //   seter('erreur in les formation donner ?')
  // }
  // }

  const create_post_Bricoleur = async (e) =>{
    e.preventDefault();
    const client={
      ...formData ,
    };
    console.log(client)
  try {
    await axios.post('/api/create_post_user', client);
    console.log('add post client')
      setModal(false)
      setFormData({title:'',description:'',date:''})
  } catch (error) {
    console.log(error)
  }
  }
  

    
  const deleteClient  = (id_bri) =>{
        
    Swal.fire({
        title: 'Are you sure?',
        text: "You are sure to delete yourself !!!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                const response = await axios.delete(`/api/deletbricoleur/${id_bri}`);
                navigate('/');
                Swal.fire(
                    'Deleted!',
                    response.data.message,
                    'Done successfully, Best of luck'
                  )
            } catch (error) {
                console.log(error)
            }
        }
    });
}

    const deletePostBricoleur = (id_post) =>{
        
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
          if (result.isConfirmed) {
              try {
                  const response = await axios.delete(`/api/delet_post_bricoleur/${id_post}`);
                  fetchPostsBricoleur();
                  Swal.fire(
                      'Deleted!',
                      response.data.message,
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
              <Section>
                    <Container>
                    <FormWrapper>
                      <Links>
                            <Link to={'/'}><Logo src="./img/logo.png" /></Link>
                        <List>
                          <Link style={{'textDecoration':'none','list-style':'none'}} to={"/"}><ListItem style={{'color':'black','fontSize':'18px'}}>{t('profile_Home')}</ListItem></Link>
                          <Link style={{'textDecoration':'none','list-style':'none'}} to={"/view_bricoleurs"}><ListItem style={{'color':'black','fontSize':'18px'}}>{t('Search')}</ListItem></Link>
                          <Link style={{'textDecoration':'none','list-style':'none'}} to={'/choiser_Announce'}><ListItem style={{'color':'black','fontSize':'18px'}}>{t('profile_Choise_Announce')}</ListItem></Link>
                        </List>
                          <Icons>    
                              { il8n.language == 'fr' && <button style={{"width":"50px","border":"none","padding":"6px","borderRadius":"5px","fontWeight":"bold",'background':'orange'}} onClick={()=> {il8n.changeLanguage('ar')}}>AR</button>}
                              {il8n.language == 'ar' && <button style={{"width":"50px","border":"none","padding":"6px","borderRadius":"5px","fontWeight":"bold",'background':'orange'}} onClick={()=> {il8n.changeLanguage('fr')}}>FR</button>}
                          </Icons>
                        </Links>  
                      </FormWrapper>
                    </Container>
              </Section>


            <div className='container crud shadow-lg bg-body rounded col-8' style={{"height":'300px'}}>
            <div className='row'>
{/* 
            {


user!=='' ?

    user?.map((b) => {
      return (
        <> */}

              <div className="row d_flex justifiy-content-center">
                  <div className="col-md-10">
                      <div className="row z-depth-3">
                        <div className="col-sm-4 bg-info rounded-left">
                          <div className="card-black text-center text-white">
                              <i className="fas fa-user-tie fa-7x mt-5"></i>
                              <h2 className="font-weight-bold mt-4">{user.firstName}</h2>
                              {/* <i className="far fa-edit fa-2x mb-4"></i> */}
                          </div>
                        </div>
                        <div className="col-sm-8 bg-white rounded-right" >
                        <h3 className="mt-3 text-center"><i>{t('Profile_title')}</i></h3>
                          <hr style={{'marginLeft':'198px'}} className="badge-primary mt-0 w-25"/>
                          <div className="row">
                              <div className="col-sm-6">
                                <p className="font-weight-bold ">{t('Profile_Email')}:</p>
                                <h6 className="text-muted">{user.email}</h6>
                              </div>
                              <div className="col-sm-6">
                                <p className="font-weight-bold ">{t('Profile_Name')}:</p>
                                <h6 className="text-muted">{user.firstName} {user.lastname}</h6>
                              </div>
                          </div>
                          {/* <h4 style={{'marginLeft':'70px'}} className="mt-3">Posts</h4> */}
                          <hr className="bg-primary"/>
                          <div className="row">
                              <div className="col-sm-4">
                                <p className="font-weight-bold ">{t('Profile_Ville')}:</p>
                                <h6 className="text-muted">{user.city}</h6>
                              </div>
                              <div className="col-sm-4">
                                <p className="font-weight-bold ">{t('Profile_Adresse')}:</p>
                                <h6 className="text-muted">{user.address}</h6>
                              </div>
                              <div className="col-sm-4">
                                <p className="font-weight-bold ">{t('Profile_Metier')}:</p>
                                <h6 className="text-muted">{user.metier}</h6>
                              </div>
                              <div>
                              <div className="col-sm-12" style={{'display':'flex','height':'28px'}}>
                                <button style={{"borderRadius":"4px","border":"none",'width':'170px','background':'#66b3ff','color':'white','marginLeft':'46px'}} onClick={(e)=>afficher(user.id)}>{t('Profile_Posts')}</button>
                                <Link to={`Create_post_bricoleur/${user.id}`}><button style={{"borderRadius":"4px","border":"none",'width':'100px','background':'#66b3ff','color':'white','marginLeft':'46px'}}>{t('Profile_Create_Post')}</button></Link>
                                <Link to={`posts_clients_metier/${user.metier}`}><button style={{"borderRadius":"4px","border":"none",'width':'100px','background':'#66b3ff','color':'white','marginLeft':'46px'}}>{t('Profile_Posts_Clients')}</button></Link>
                                {/* <button style={{"borderRadius":"4px",'width':'170px','background':'#66b3ff','color':'white','marginLeft':'86px'}} onClick={()=>setModal(true)}>{t('Profile_Create_Post')}</button> */}
                                <button style={{"borderRadius":"4px",'width':'170px',"border":"none",'background':'red','color':'white','marginLeft':'46px'}} onClick={()=>deleteClient(user.id)}>{t('Profile_Delete_me')}</button>
                              </div>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>

                              {/* <Modal 
                                size="lg"
                                isOpen={modal}
                                toggle={()=> setModal(!modal)}>
                                  <ModalHeader 
                                  toggle={()=> setModal(!modal)}>
                                       <h2 style={{'color':'orange'}}>Create post Bricoleur</h2> 
                                  </ModalHeader>
                                  <ModalBody >
                                    <div className="container" style={{'margin-left':'40px','margin-top':'-10px','margin-bottom':'20px'}}><br/>
                                      <label style={{'marginLeft':'290px','fontWeight':'bold','color':'orange'}} htmlFor="title">Title</label><br/>
                                      <input style={{'marginLeft':'120px','width':'400px','background':'white','borderRadius':'4px'}} type="text" name="title" id="title" value={formData.title} onChange={handleChange}  required /><br/>
                                      <label style={{'marginLeft':'280px','fontWeight':'bold','color':'orange'}} htmlFor="description">Description</label><br/>
                                      <textarea style={{"borderRadius":"10px","width":"500px",'marginLeft':'75px','background':'white','borderRadius':'4px'}} rows={4} type="text" name="description" id="description" value={formData.description} onChange={handleChange}  required /><br/>
                                      <label style={{'marginLeft':'295px','fontWeight':'bold','color':'orange'}} htmlFor="date">Date</label><br/>
                                      <input style={{'marginLeft':'120px','width':'400px','background':'white','borderRadius':'4px'}} type="date" name="date" id="date" disabled  /><br/>
                                      <label style={{'marginLeft':'295px','fontWeight':'bold','color':'orange'}} htmlFor="image">Image</label><br/>
                                      <input style={{'marginLeft':'130px','width':'400px','background':'white','borderRadius':'4px'}} type="file" name="image" id="image"  onChange={handleChange} disabled/><br/><br/>
                                      <button style={{'marginLeft':'280px','borderRadius':'5px','background':'orange'}} onClick={create_post_Bricoleur}>Create_Post</button><br/><br/>
                                      <span style={{'color':'red', 'fontWeight':'bold'}}>{er}</span>
                                    </div>
                                  </ModalBody>
                              </Modal>
              </> 
   
              )})
              :
              <>
              </>
            
      } */}
    </div>
    </div>
 
        <div className='container crud shadow-lg p-3 mb-2 mt-2 bg-body rounded col-8'>
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
                                    <i class="fa fa-trash "  aria-hidden="true" style={{"marginRight":"25px", "color":"#f50505","fontSize":"30px"}} onClick={()=>deletePostBricoleur(post.id)}></i>
                                    <Link to={`view_update_post_bricoleur/${post.id}`}><i class="fa-solid fa-pen-to-square" style={{"fontSize":"30px"}}></i></Link>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>

        

        </>
  )
};

export default Profile_Bricoleur;


const Section = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -30px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;


const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 80px;
  margin-left: -30px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;






