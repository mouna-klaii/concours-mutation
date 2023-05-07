
import { Routes , Route} from 'react-router-dom';
import Nav from './component/NAVBAR/NavBBar';
import { ToastContainer } from 'react-toastify';
import Login from './pages/login/login'
import Register from './pages/register/register'
import Home from './pages/Home/Home';
import Formulaire from './pages/formulaire/Formulaire';
import './component/style.css'
import ContactLists from './pages/ContactList/ContactLists';
import Edit from './pages/Edit/Edit';
import Add from './pages/Add/Add';


function App() {
 
  return (
    <div>
<div className='text-start'><img src='/logo-utm-fr.jpg' width={80} alt='' /></div>
<div className='text-end'>الجمهورية التونسية</div><div></div>
<div className='text-end'>وزارة التعليم العالي والبحث العلمي</div><div></div>
<div className='text-end'>جامعة تونس المنار</div>

  
  
 <p className='h3'>منظومة النقل الجامعية و الإدماج والتسجيل في إختصاص ثان 2022-2023</p>    

<Nav />


<Routes>
<Route path="/all-user" element={<ContactLists/>}/>
        <Route path="/Edit/:id" element={<Edit/>}/>
        <Route path="/Add/" element={<Add/>}/>
         <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Formulaire" element={<Formulaire/>}/>
      </Routes>
      <ToastContainer />
      <br></br></div>    
      
   
  );
  

}

export default App
