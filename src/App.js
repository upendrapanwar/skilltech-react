import React, { lazy,useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { themeChange } from 'theme-change';
import 'react-toastify/dist/ReactToastify.css';
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
import OrderHistory from './containers/learner/OrderHistory';
import MyCourses from './containers/learner/MyCourses';
import PremiumCourses from './containers/store/PremiumCourses';
import UpdateProfile from './containers/learner/UpdateProfile';
import AmbassadorUpdateProfile from './containers/ambessador/UpdateProfile';
import AboutUs from './components/common/AboutUs';
import HowItWorks from './components/common/HowItWorks';
import ContactUs from './components/common/ContactUs';
import ActiveSubscribedSubscriber from './containers/admin/ActiveSubscribedSubscriber';
import ReferralPerAmbassador from './containers/admin/ReferralPerAmbassador';
import ActiveReferralPerAmbassador from './containers/admin/ActiveReferralPerAmbassador';
import InactiveReferralPerAmbassador from './containers/admin/InactiveReferralPerAmbassador';
import DefaultedPaymentOfAmbassador from './containers/admin/DefaultedPaymentOfAmbassador';
import DefaultedPaymentOfSubscriber from './containers/admin/DefaultedPaymentOfSubscriber';
import CancelSubscriptionBySubscriber from './containers/admin/CancelSubscriptionBySubscriber';
import CancelSubscriptionByAmbassador from './containers/admin/CancelSubscriptionByAmbassador';

const AdminLogin = lazy(() => import('./containers/admin/Login'));
const AdminDashboard = lazy(() => import('./containers/admin/AdminDashboard'));
const AdminSubscription = lazy(() => import('./containers/admin/Subscription'));
const AdminActiveAgents = lazy(() => import('./containers/admin/ActiveAgents'));
const ActiveSubscribedAmbassador = lazy(() => import('./containers/admin/ActiveSubscribedAmbassador'));

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false);
    
    // To scroll page to top while open
    window.scrollTo(0, 0);
  }, [pathname])
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/learner/dashboard/success' element={<LearnerDashboard/>} />
        <Route path='/learner/dashboard/cancel' element={<LearnerDashboard/>} />
        <Route path='/learner/dashboard/notify' element={<LearnerDashboard/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        <Route path='/terms-of-service' element={<TermsOfService/>} />
        <Route path='/browse-courses' element={<Courses/>} />
        <Route path='/courses-details' element={<CoursesDetails/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/premium-courses' element={<PremiumCourses/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/how-it-works' element={<HowItWorks/>} />
        <Route path='/contact-us' element={<ContactUs/>} />

        <Route path='/learner/dashboard' element={<LearnerDashboard/>} />
        <Route path='/learner/subscription' element={<Subscription/>} />
        <Route path='/learner/order-history' element={<OrderHistory/>} />
        <Route path='/learner/my-courses' element={<MyCourses/>} />
        <Route path='/learner/updateprofile' element={<UpdateProfile/>} />
        
        <Route path='/ambessador/ambassador-subscription' element={<AmbassadorSubscription/>} />
        <Route path='/ambessador/ambassador-update' element={<AmbassadorUpdateProfile/>} />
        <Route path='/ambessador/dashboard' element={<AmbassadorDashboard/>} />
        <Route path='/ambessador/dashboard/success' element={<AmbassadorDashboard/>} />
        <Route path='/ambessador/dashboard/cancel' element={<AmbassadorDashboard/>} />
        <Route path='/ambessador/dashboard/notify' element={<AmbassadorDashboard/>} />
        <Route path='/owner/dashboard' element={<Ownerdashboard/>} />

        <Route path='/admin/login' element={<AdminLogin/>} />
        <Route path='/admin/admin-dashboard' element={<AdminDashboard/>} />
        <Route path='/admin/subscription' element={<AdminSubscription/>} />
        <Route path='/admin/active-agents' element={<AdminActiveAgents/>} />
        <Route path='/admin/active-subscribed-ambassador' element={<ActiveSubscribedAmbassador/>} />
        <Route path='/admin/active-subscribed-subscriber' element={<ActiveSubscribedSubscriber/>} />
        <Route path='/admin/defaulted-subscription-paymentof-ambassador' element={<DefaultedPaymentOfAmbassador/>} />
        <Route path='/admin/defaulted-subscription-paymentof-subscriber' element={<DefaultedPaymentOfSubscriber/>} />
        <Route path='/admin/subscription-cancelledby-ambassador' element={<CancelSubscriptionByAmbassador/>} />
        <Route path='/admin/subscription-cancelledby-subscriber' element={<CancelSubscriptionBySubscriber/>} />
        <Route path='/admin/active-inactive-referral-per-ambassador' element={<ReferralPerAmbassador/>} />
        <Route path='/admin/active-referral-per-ambassador' element={<ActiveReferralPerAmbassador/>} />
        <Route path='/admin/inactive-referral-per-ambassador' element={<InactiveReferralPerAmbassador/>} />
     </Routes>
    </>
  );
}

export default App;
