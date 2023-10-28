import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/react-fontawesome';
//import 'get-google-fonts';
import './assets/css/style.css';
import './assets/css/all.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

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

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/learner/dashboard' element={<LearnerDashboard/>} />
        <Route path='/learner/subscription' element={<Subscription/>} />
        <Route path='/learner/subscription/success' element={<Subscription/>} />
        <Route path='/learner/subscription/cancel' element={<Subscription/>} />
        <Route path='/learner/subscription/notify' element={<Subscription/>} />
        <Route path='/ambessador/ambassador-subscription' element={<AmbassadorSubscription/>} />
        <Route path='/ambessador/dashboard' element={<AmbassadorDashboard/>} />
        <Route path='/owner/dashboard' element={<Ownerdashboard/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        <Route path='/terms-of-service' element={<TermsOfService/>} />
     </Routes>
    </>
  );
}

export default App;
