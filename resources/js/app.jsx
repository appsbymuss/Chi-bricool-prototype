import './bootstrap';

import ReactDOM from 'react-dom/client';        
import { BrowserRouter , Routes , Route } from 'react-router-dom';

import Index from './components/Index';
import FormClient from './components/les_form/formclient';
import Choice from './components/Form/choices';
import LoginPage from './components/login/loginpage';
import FormBricoleur from './components/les_form/formbricoleur';
import UserInfo from './components/profile/userinfo';
import Create_post_client from './components/post/create_post_client';
import Create_post_bricoleur from './components/post/create_post_bricoleur';
import View_post_client from './components/post/view_post_client';
import View_post_bricoleur from './components/post/view_post_bricoleur';
import View_up_del_post_client from './components/post/view_up_del_post_client';
import View_up_del_post_bricoleur from './components/post/View_up_del_post_bricoleur';
import Update_post_client from './components/post/update_post_client';
import Update_post_bricoleur from './components/post/update_post_bricoleur';
import Admin_view_delete_clients from './components/admin/Admin_view_delete_clients'
import Profile from './components/profile/Profile';
import 'sweetalert2/dist/sweetalert2.css'
import Admin from './components/admin/Admin';
import Admin_view_delete_bricoleur from './components/admin/Admin_view_delete_bricoleur';
import Contact from './components/contact/Contact';
import Interface_Client from './components/client/Interface_Client';
import Choiser_annons from './components/post/choiser_annons';
import Ditai_post_client from './components/post/Ditai_post_client';
import Ditai_post_bricoleur from './components/post/Ditai_post_bricoleur';
import About from './components/about us/About';
import Update_client from './components/client/Update_client';
import Profile_bricoleur from './components/profile/Profile_Bricoleur';
import View_clients from './components/client/view_bricoleurs';
import Inforamtion_bricoleurs from './components/profile/Inforamtion_bricoleurs';
import HeaderD from './components/profile/HeaderD';
import Commontaire_post from './components/post/commontaire_post';
import Admin_Del_posts_clients from './components/admin/Admin_Del_posts_clients';
import Admin_Del_posts_bricoleur from './components/admin/Admin_Del_posts_bricoleur';
import Posts_clients_metier from './components/post/Posts_clients_metier';
import Ditai_post_client22 from './components/post/Ditai_post_client22';



ReactDOM.createRoot(document.getElementById('app')).render(  
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Index/>}/>
            <Route path='/category' exact element={<Choice/>}/>
            <Route path='/create_client' exact element={<FormClient/>}/>
            <Route path='/login' exact element={<LoginPage/>}/>
            <Route path='/create_bricoleur' exact element={<FormBricoleur/>}/>
            <Route path='/profile/Create_post_client/:id' exact element={<Create_post_client/>}/>
            <Route path='/profile_bricoleur/Create_post_bricoleur/:id' exact element={<Create_post_bricoleur/>}/>
            <Route path='/view_post_client' exact element={<View_post_client/>}/>
            <Route path='/view_post_bricoleur' exact element={<View_post_bricoleur/>}/>
            <Route path='/view_up_del_post_client' exact element={<View_up_del_post_client/>}/>
            <Route path='/view_up_del_post_bricoleur' exact element={<View_up_del_post_bricoleur/>}/>
            <Route path='/profile/view_update_post_client/:id_post' exact element={<Update_post_client/>}/>
            <Route path='/profile_bricoleur/view_update_post_bricoleur/:id_post' exact element={<Update_post_bricoleur/>}/>
            <Route path='/Admin_view_delete_clients' exact element={<Admin_view_delete_clients/>}/>
            <Route path='/Admin_view_delete_bricoleurs' exact element={<Admin_view_delete_bricoleur/>}/>
            <Route path='/Admin' exact element={<Admin/>}/>
            <Route path='/profile' exact element={<Profile/>}/>
            <Route path='/profile_bricoleur' exact element={<Profile_bricoleur/>}/>
            <Route path='/userinfo' exact element={<UserInfo/>}/>
            <Route path='/contact' exact element={<Contact/>}/>
            <Route path='/interface_client' exact element={<Interface_Client/>}/>
            <Route path='/choiser_Announce' exact element={<Choiser_annons/>}/>
            <Route path='/about' exact element={<About/>}/>
            <Route path='/view_post_client/Ditai_post_client/:id_client' exact element={<Ditai_post_client22/>}/>
            <Route path='/view_post_bricoleur/Ditai_post_bricoleur/:id_bricoleur/:id' exact element={<Ditai_post_bricoleur/>}/>
            <Route path='/profile/view_update_client/:id' exact element={<Update_client/>} />
            <Route path='/view_bricoleurs' exact element={<View_clients/>} />
            <Route path='/information_bricoleur/:id' exact element={<Inforamtion_bricoleurs/>} />
            <Route path='/HeaderD' exact element={<HeaderD/>} />
            <Route path='/Commontaire_post/:id' exact element={<Commontaire_post/>} />
            <Route path='profile_bricoleur/posts_clients_metier/:metier' exact element={<Posts_clients_metier/>} />
            <Route path='Admin_view_delete_clients/delete_posts_clients/:id' element={<Admin_Del_posts_clients/>} />
            <Route path='/Admin_view_delete_bricoleurs/delete_posts_bricoleurs/:id' element={<Admin_Del_posts_bricoleur/>} />
            <Route path='/profile_bricoleur/posts_clients_metier/:id/Ditai_post_client/:id' exact element={<Ditai_post_client/>}/>
        </Routes>
    </BrowserRouter>
);
