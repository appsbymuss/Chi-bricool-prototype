// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import 'bootstrap/dist/css/bootstrap.min.css'

// // import UserInfo from "./profile/userinfo";


// // const FormContainer = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// // `;

// const FormWrapper = styled.div`
//   width: 200px;
//   padding: 40px;
// `;


// const Input = styled.input`
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
//   width: 400px;
//   background-color: orange;
//   color: white;
//   margin-left: 500px;

//   &:hover {
//     background-color: orange;
//     box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
//     transform: translateY(-5px);
//     transition: all 0.3s ease;
//   }
// `;



// const Button = styled.button`
//   padding: 10px 20px;
//   border-radius: 30px;
//   border: none;
//   background-color: orange;
//   width:120px;
//   color: Black;
//   font-size: 1.2rem;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  
//   &:hover {
//     background-color: #ef5b3f;
//     box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
//     transform: translateY(-5px);
//   }
  
//   &:focus {
//     outline: none;
//   }
// `;


// const Profile = () => {
//   const [code_verifaid, setCode] = useState("")
//   const [client, setClient] = useState([])
//   const [clie, setClie] = useState('')
//   const [id_p, setId_p] = useState('')
//   const [posts, setPosts] = useState([]);


//   const code_v = (e) =>{
//     e.preventDefault()
//     setClie(code_verifaid)
//   }

//     useEffect(() => {
//       fetchClients();
//       },[clie])

//     const fetchClients = async () =>{
//       try {
//           const response = await axios.get(`/api/code_verifaid_client/${clie}`);
//           if(clie!==''){
//             setClient(response.data);
//           }
//       } catch (error) {
//           console.log(error)
//       }

// }


// const afficher = (id) =>{
//   setId_p(id)
// }

//     useEffect(() => {
//         fetchPostsClient();
//     },[id_p])

//     const fetchPostsClient = async () =>{
//         try {
//             const respons = await axios.get(`/api/view_post_clientt/${id_p}`);
//             if(id_p!==''){
//               setPosts(respons.data);
//         }
//               console.log(posts)
//         } catch (error) {
//             console.log(error)
//         }
//     }
  

//     const deletePostClient  = (id_post) =>{
        
//       Swal.fire({
//           title: 'Are you sure?',
//           text: "You won't be able to revert this!",
//           icon: 'warning',
//           showCancelButton: true,
//           confirmButtonColor: '#3085d6',
//           cancelButtonColor: '#d33',
//           confirmButtonText: 'Yes, delete it!'
//         }).then(async (result) => {
//           if (result.isConfirmed) {
//               try {
//                   const response = await axios.delete(`/api/delet_post_client/${id_post}`);
//                   fetchPostsClient();
//                   Swal.fire(
//                       'Deleted!',
//                       response.data.message,
//                       'success'
//                     )
//               } catch (error) {
//                   console.log(error)
//               }
//           }
//       });
//   }

//   return (
 
//         <>
//               <Section>
//                     <Container>
//                     <FormWrapper>
//                       <Links>
//                         <Logo src="./img/logo.png" />
//                         <List>
//                           <Link style={{'textDecoration':'none','list-style':'none'}} to={"/"}><ListItem style={{'color':'black','fontSize':'16px'}}>Home</ListItem></Link>
//                           <ListItem>Search</ListItem>
//                           <Link style={{'textDecoration':'none','list-style':'none'}} to={'/choiser_Announce'}><ListItem style={{'color':'black','fontSize':'16px'}}>Choise_Announce</ListItem></Link>
//                         </List>
//                             <Input type="password" value={code_verifaid} onChange={(e)=>setCode(e.target.value)} placeholder="Enter your code verfaid" />
//                             <Button type='submit' onClick={(e)=>code_v(e)}>code</Button>
                           
//                       </Links>
//                       </FormWrapper>
//                     </Container>
//               </Section>

//             <div className='container crud shadow-lg p-3 mb-2 mt-2 bg-body rounded col-8'>
//             <div className='row'>
//             <table class="table table-striped">
//                       <thead>
//                       <tr>
//                       <th scope="col">id</th>
//                       <th scope="col">firstName</th>
//                       <th scope="col">lastName</th>
//                       <th scope="col">email</th>
//                       <th scope="col">address</th>
//                       <th scope="col">city</th>
//                       <th scope="col">Action</th>
//                       </tr>
//                       </thead>
   
//                   {
//                     client!=='' ?

//                         client?.map((c,i) => {
//                           return (
//                             <>
//                           <tbody>
//                             <tr key={i}>
//                                 <td>{c.id}</td>
//                                 <td>{c.firstName}</td>
//                                 <td>{c.lastname}</td>
//                                 <td>{c.email}</td>
//                                 <td>{c.address}</td>
//                                 <td>{c.city}</td>
//                                 <td style={{'display':'flex','padding':'17px'}}>
//                                     {/* <Link to={`view_update_client/${c.id}`}><i class="fa-solid fa-pen-to-square" style={{"fontSize":"30px"}}></i></Link> */}
//                                     <button style={{"borderRadius":"4px",'background':'orange','color':'white','marginLeft':'6px'}} onClick={(e)=>afficher(c.id)}>Posts</button>
//                                     <Link to={`Create_post_client/${c.id}`}><button style={{"borderRadius":"4px",'background':'orange','color':'white','marginLeft':'6px'}}>Create_post</button></Link>
//                                 </td>
//                             </tr>  
//                             </tbody> 
//                             </>
//                             )}
//                              )
                                
//                             :
//                             <>
//                             </>  
                           
                                    
//                     }
//                                </table>
             
//             </div>
//         </div>

//         <div className='container crud shadow-lg p-3 mb-2 mt-2 bg-body rounded col-8'>
//             <div className='row'>
//             <table class="table table-striped">
//                     <thead>
//                         <tr>
//                         <th scope="col">ID</th>
//                         <th scope="col">TITLE</th>
//                         <th scope="col">DESCRIPTION</th>
//                         <th scope="col">DATE</th>
//                         <th scope="col">ACTION</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                     {
//                         posts?.map(post => (
//                             <tr key={post.id}>
//                                 <td>{post.id}</td>
//                                 <td>{post.title}</td>
//                                 <td>{post.description}</td>
//                                 <td>{post.date}</td>
//                                 <td>
//                                     <i class="fa fa-trash "  aria-hidden="true" style={{"marginRight":"25px", "color":"#f50505","fontSize":"30px"}} onClick={()=>deletePostClient(post.id)}></i>
//                                     <Link to={`view_update_post_client/${post.id}`}><i class="fa-solid fa-pen-to-square" style={{"fontSize":"30px"}}></i></Link>
//                                 </td>
//                             </tr>
//                         ))
//                     }
//                     </tbody>
//                 </table>
//             </div>
//         </div>

//         </>
//   )
// };

// export default Profile;


// const Section = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: -30px;
//   @media only screen and (max-width: 768px) {
//     width: 100%;
//   }
// `;


// const Container = styled.div`
//   width: 1400px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 0px;

//   @media only screen and (max-width: 768px) {
//     width: 100%;
//     padding: 10px;
//   }
// `;

// const Links = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 50px;
// `;

// const Logo = styled.img`
//   height: 80px;
// `;

// const List = styled.ul`
//   display: flex;
//   gap: 20px;
//   list-style: none;

//   @media only screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// const ListItem = styled.li`
//   cursor: pointer;
// `;






import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css'

import { useTranslation } from "react-i18next";


// import { Modal, ModalHeader,ModalBody } from "reactstrap";
// import { Navigate } from "react-router-dom";

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
  width: 450px;
  background-color: orange;
  color: white;
  margin-left: 400px;

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
  width:100px;
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


const Profile = () => {
  const [client, setClient] = useState([])
  const [user, setUser] = useState([])
  const [id_p, setId_p] = useState('')
  const [posts, setPosts] = useState([]);
  // const [modal, setModal] = useState(false)
  const [er, seter] = useState('')
  const navigate = useNavigate()

  const [t, il8n] = useTranslation()


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
          if(response.data.role === "bricoleur"){
            navigate('/profile_bricoleur')
          }
        }catch(error){
          console.log(error)
        }
      };

      fetchUser();

      },[])

    // const fetchClients = async () =>{
    //   try {
    //       const response = await axios.get(`/api/user/${clie}`);
    //       if(clie!==''){
    //         setClient(response.data);
    //       }
    //   } catch (error) {
    //       console.log(error)
    //   }

// }


const afficher = (id) =>{
  setId_p(id)
}

    useEffect(() => {
        fetchPostsClient();
    },[id_p])

    const fetchPostsClient = async () =>{
        try {
            const respons = await axios.get(`/api/view_post_clientt/${id_p}`);
            if(id_p!==''){
              setPosts(respons.data);
        }
              console.log(posts)
        } catch (error) {
            console.log(error)
        }

    }

  // const [formData, setFormData] = useState({
  //   client_id:'',
  //   title: '',
  //   description: '',
  //   date : Date(),
  //   image: '',
  // });


  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setFormData((state) => ({
  //     ...state,
  //     [name]: value,
  //   }));
  // }

  // const create_post_Client = async (e) =>{
  //   e.preventDefault();
  //   const clientt={
  //     ...formData ,
  //   };  



  // try {
  //   await axios.post('/api/create_post_client', clientt);
  //   console.log('add post client')
  //   setModal(false)
  //   setFormData({client_id:'',title:'',description:''})
  // } catch (error) {
  //   console.log(error)
  //   seter('erreur in les formation donner ?')
  // }
  // }

  
  const deleteClient  = (id_cli) =>{
        
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
                const response = await axios.delete(`/api/deletclient/${id_cli}`);
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
  

    const deletePostClient  = (id_post) =>{
        
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
                  const response = await axios.delete(`/api/delet_post_client/${id_post}`);
                  fetchPostsClient();
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
                                <h6 className="text-muted">{user.firstName}{user.lastname}</h6>
                              </div>
                          </div>
                          {/* <h4 style={{'marginLeft':'70px'}} className="mt-3">Posts</h4> */}
                          <hr className="bg-primary"/>
                          <div className="row">
                              <div className="col-sm-5">
                                <p className="font-weight-bold ">{t('Profile_Ville')}:</p>
                                <h6 className="text-muted">{user.city}</h6>
                              </div>
                              <div className="col-sm-5">
                                <p className="font-weight-bold ">{t('Profile_Adresse')}:</p>
                                <h6 className="text-muted">{user.address}</h6>
                              </div>
                              <div>
                              <div className="col-sm-11" style={{'display':'flex','height':'28px'}}>
                                <button style={{"borderRadius":"4px",'width':'170px','background':'#66b3ff','color':'white','marginLeft':'86px'}} onClick={(e)=>afficher(user.id)}>{t('Profile_Posts')}</button>
                                <Link to={`Create_post_client/${user.id}`}><button style={{"borderRadius":"4px",'width':'170px','background':'#66b3ff','color':'white','marginLeft':'86px'}}>{t('Profile_Create_Post')}</button></Link>
                                {/* <button style={{"borderRadius":"4px",'width':'170px','background':'#66b3ff','color':'white','marginLeft':'86px'}}  onClick={()=>setModal(true)}>{t('Profile_Create_Post')}</button> */}
                                <button style={{"borderRadius":"4px",'width':'170px','background':'#66b3ff','color':'white','marginLeft':'86px'}} onClick={()=>deleteClient(user.id)}>{t('Profile_Delete_me')}</button>
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
                                       <h2 style={{'color':'orange'}}>Create post client</h2> 
                                  </ModalHeader>
                                  <ModalBody >
                                    <div className="container" style={{'margin-left':'40px','margin-top':'-10px','margin-bottom':'20px'}}><br/>
                                      <label style={{'marginLeft':'300px','fontWeight':'bold','color':'orange'}} htmlFor="id">Id</label><br/>
                                      <input style={{'marginLeft':'120px','width':'400px','background':'white','borderRadius':'4px'}} type="number" name="client_id" id="id" value={formData.client_id}  onChange={handleChange}   required /><br/>
                                      <label style={{'marginLeft':'290px','fontWeight':'bold','color':'orange'}} htmlFor="title">Title</label><br/>
                                      <input style={{'marginLeft':'120px','width':'400px','background':'white','borderRadius':'4px'}} type="text" name="title" id="title" value={formData.title} onChange={handleChange}  required /><br/>
                                      <label style={{'marginLeft':'280px','fontWeight':'bold','color':'orange'}} htmlFor="description">Description</label><br/>
                                      <textarea style={{"borderRadius":"10px","width":"500px",'marginLeft':'75px','background':'white'}} rows={4} type="text" name="description" id="description" value={formData.description} onChange={handleChange}  required /><br/>
                                      <label style={{'marginLeft':'295px','fontWeight':'bold','color':'orange'}} htmlFor="date">Date</label><br/>
                                      <input style={{'marginLeft':'120px','width':'400px','background':'white','borderRadius':'4px'}} type="date" name="date" id="date" disabled  required /><br/>
                                      <label style={{'marginLeft':'295px','fontWeight':'bold','color':'orange'}} htmlFor="image">Image</label><br/>
                                      <input style={{'marginLeft':'130px','width':'400px','background':'white','borderRadius':'4px'}} type="file" name="image" id="image"  onChange={handleChange} disabled/><br/><br/>
                                      <button style={{'marginLeft':'280px','borderRadius':'5px','background':'orange'}} onClick={(e)=>create_post_Client(e)}>Create_Post</button><br/><br/>
                                      <span style={{'color':'red', 'fontWeight':'bold'}}>{er}</span>
                                    </div>
                                  </ModalBody>
                              </Modal> */}

    </div>
    </div>
 
        <div className='container crud shadow-lg p-3 mb-2 mt-2 bg-body rounded col-8'>
            <div className='row'>
            <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">{t('Profile_id')}</th>
                        <th scope="col">{t('Profile_titl')}</th>
                        <th scope="col">{t('Profile_Description')}</th>
                        <th scope="col">{t('Profile_Metier')}</th>
                        <th scope="col">{t('Profile_Date')}</th>
                        <th scope="col">{t('Profile_Action')}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        posts?.map(post => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.description}</td>
                                <td>{post.metier}</td>
                                <td>{post.date}</td>
                                <td>
                                    <i class="fa fa-trash "  aria-hidden="true" style={{"marginRight":"25px", "color":"#f50505","fontSize":"30px"}} onClick={()=>deletePostClient(post.id)}></i>
                                    <Link to={`view_update_post_client/${post.id}`}><i class="fa-solid fa-pen-to-square" style={{"fontSize":"30px"}}></i></Link>
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
      
export default Profile;


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
  margin-left: -10px;
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






