//import 'get-google-fonts';
import 'react-toastify/dist/ReactToastify.css';
import React, { lazy,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { themeChange } from 'theme-change';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import LearnerDashboard from './containers/learner/Dashboard';
import AmbassadorDashboard from './containers/ambessador/Dashboard';
import Ownerdashboard from './containers/owner/Dashboard';
import Subscription from './containers/learner/Subscription';
import AmbassadorSubscription from './containers/ambessador/Subscription';
import PrivacyPolicy from './containers/Privacy-policy';
import TermsOfService from './containers/Terms-of-service';
import Courses from './containers/store/Courses';
import CoursesDetails from './containers/store/CoursesDetails';
import Cart from './containers/store/Cart';

const AdminLogin = lazy(() => import('./containers/admin/Login'));
const AdminDashboard = lazy(() => import('./containers/admin/AdminDashboard'));

function App() {
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false)
  }, [])
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/learner/dashboard/success' element={<LearnerDashboard/>} />
        <Route path='/learner/dashboard/cancel' element={<LearnerDashboard/>} />
        <Route path='/learner/dashboard/notify' element={<LearnerDashboard/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/learner/dashboard' element={<LearnerDashboard/>} />
        <Route path='/learner/subscription' element={<Subscription/>} />
        
        <Route path='/ambessador/ambassador-subscription' element={<AmbassadorSubscription/>} />
        <Route path='/ambessador/dashboard' element={<AmbassadorDashboard/>} />
        <Route path='/owner/dashboard' element={<Ownerdashboard/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        <Route path='/terms-of-service' element={<TermsOfService/>} />
        
        <Route path='/browse-courses' element={<Courses/>} />
        <Route path='/courses-details' element={<CoursesDetails/>} />
        <Route path='/cart' element={<Cart/>} />

        <Route path='/admin/login' element={<AdminLogin/>} />
        <Route path='/admin/admin-dashboard' element={<AdminDashboard/>} />
     </Routes>
    </>
  );
}

export default App;
