import React, { Suspense, lazy,useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { themeChange } from 'theme-change';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/common/Loader';
const Home = lazy(() => import('./containers/Home'));
const Login = lazy(() => import('./containers/Login'));
const Signup = lazy(() => import('./containers/Signup'));
const LearnerDashboard = lazy(() => import('./containers/learner/Dashboard'));
const AmbassadorDashboard = lazy(() => import('./containers/ambessador/Dashboard'));
const Ownerdashboard = lazy(() => import('./containers/owner/Dashboard'));
const Subscription = lazy(() => import('./containers/learner/Subscription'));
const AmbassadorSubscription = lazy(() => import('./containers/ambessador/Subscription'));
const PrivacyPolicy = lazy(() => import('./containers/Privacy-policy'));
const TermsOfService = lazy(() => import('./containers/Terms-of-service'));
const Courses = lazy(() => import('./containers/store/Courses'));
const CoursesDetails = lazy(() => import('./containers/store/CoursesDetails'));
const BecomeAmbassador = lazy(() => import('./containers/store/BecomeAmbassador'));
const Cart = lazy(() => import('./containers/store/Cart'));
const OrderHistory = lazy(() => import('./containers/learner/OrderHistory'));
const MyCourses = lazy(() => import('./containers/learner/MyCourses'));
const PremiumCourses = lazy(() => import('./containers/store/PremiumCourses'));
const UpdateProfile = lazy(() => import('./containers/learner/UpdateProfile'));
const AmbassadorUpdateProfile = lazy(() => import('./containers/ambessador/UpdateProfile'));
const AboutUs = lazy(() => import('./components/common/AboutUs'));
const FAQs = lazy(() => import('./components/common/FAQs'));
const HowItWorks = lazy(() => import('./components/common/HowItWorks'));
const ContactUs = lazy(() => import('./components/common/ContactUs'));

const AdminLogin = lazy(() => import('./containers/admin/Login'));
const AdminDashboard = lazy(() => import('./containers/admin/AdminDashboard'));
const AdminSubscription = lazy(() => import('./containers/admin/Subscription'));
const AdminActiveAgents = lazy(() => import('./containers/admin/ActiveAgents'));
const ActiveSubscribedAmbassador = lazy(() => import('./containers/admin/ActiveSubscribedAmbassador'));
const ActiveSubscribedSubscriber = lazy(() => import('./containers/admin/ActiveSubscribedSubscriber'));
const ReferralPerAmbassador = lazy(() => import('./containers/admin/ReferralPerAmbassador'));
const ActiveReferralPerAmbassador = lazy(() => import('./containers/admin/ActiveReferralPerAmbassador'));
const InactiveReferralPerAmbassador = lazy(() => import('./containers/admin/InactiveReferralPerAmbassador'));
const DefaultedPaymentOfAmbassador = lazy(() => import('./containers/admin/DefaultedPaymentOfAmbassador'));
const DefaultedPaymentOfSubscriber = lazy(() => import('./containers/admin/DefaultedPaymentOfSubscriber'));
const CancelSubscriptionBySubscriber = lazy(() => import('./containers/admin/CancelSubscriptionBySubscriber'));
const CancelSubscriptionByAmbassador = lazy(() => import('./containers/admin/CancelSubscriptionByAmbassador'));
const PaymentDueToAmbassador = lazy(() => import('./containers/admin/PaymentDueToAmbassador'));
 

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false);
    
    // To scroll page to top while open
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
      <Routes>
            <Route path="/*" element={
              <Suspense fallback={<Loader/>}>
                <PrivateRoutes />
              </Suspense>
            } />

            <Route path="/admin/*" element={
              <Suspense fallback={<Loader/>}>
                <AdminRoutes />
              </Suspense>
            } />
      </Routes>
  );
}
export default App;


export const PrivateRoutes = () => {
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
        <Route path='/become-ambassador' element={<BecomeAmbassador/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/premium-courses' element={<PremiumCourses/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/faqs' element={<FAQs/>} />
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
      </Routes>
    </>
  )
}


export const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<AdminLogin/>} />
        <Route path='/admin-dashboard' element={<AdminDashboard/>} />
        <Route path='/subscription' element={<AdminSubscription/>} />
        <Route path='/active-agents' element={<AdminActiveAgents/>} />
        <Route path='/active-subscribed-ambassador' element={<ActiveSubscribedAmbassador/>} />
        <Route path='/active-subscribed-subscriber' element={<ActiveSubscribedSubscriber/>} />
        <Route path='/defaulted-subscription-paymentof-ambassador' element={<DefaultedPaymentOfAmbassador/>} />
        <Route path='/defaulted-subscription-paymentof-subscriber' element={<DefaultedPaymentOfSubscriber/>} />
        <Route path='/subscription-cancelledby-ambassador' element={<CancelSubscriptionByAmbassador/>} />
        <Route path='/subscription-cancelledby-subscriber' element={<CancelSubscriptionBySubscriber/>} />
        <Route path='/active-inactive-referral-per-ambassador' element={<ReferralPerAmbassador/>} />
        <Route path='/active-referral-per-ambassador' element={<ActiveReferralPerAmbassador/>} />
        <Route path='/inactive-referral-per-ambassador' element={<InactiveReferralPerAmbassador/>} />
        <Route path='/payment-due-to-ambassador' element={<PaymentDueToAmbassador/>} />
      </Routes>
    </>
  )
}
