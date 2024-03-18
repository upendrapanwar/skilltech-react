import React, { Suspense, lazy,useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { themeChange } from 'theme-change';
import 'react-toastify/dist/ReactToastify.css';
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
const Cart = lazy(() => import('./containers/store/Cart'));
const OrderHistory = lazy(() => import('./containers/learner/OrderHistory'));
const MyCourses = lazy(() => import('./containers/learner/MyCourses'));
const PremiumCourses = lazy(() => import('./containers/store/PremiumCourses'));
const UpdateProfile = lazy(() => import('./containers/learner/UpdateProfile'));
const AmbassadorUpdateProfile = lazy(() => import('./containers/ambessador/UpdateProfile'));
const AboutUs = lazy(() => import('./components/common/AboutUs'));
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
            <Route path="/*" element={<PrivateRoutes />} />
            <Route path="/admin/" element={<AdminRoutes />} />
      </Routes>
  );
}

export default App;

export const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Suspense   fallback={<div>...</div>}> <Home/> </Suspense>} />
        <Route path='/login' element={<Suspense fallback={<div>...</div>}> <Login/> </Suspense>} />
        <Route path='/learner/dashboard/success' element={<Suspense fallback={<div>...</div>}> <LearnerDashboard/> </Suspense>} />
        <Route path='/learner/dashboard/cancel' element={<Suspense fallback={<div>...</div>}> <LearnerDashboard/> </Suspense>} />
        <Route path='/learner/dashboard/notify' element={<Suspense fallback={<div>...</div>}> <LearnerDashboard/> </Suspense>} />
        <Route path='/signup' element={<Suspense fallback={<div>...</div>}> <Signup/> </Suspense>} />
        <Route path='/privacy-policy' element={<Suspense fallback={<div>...</div>}> <PrivacyPolicy/> </Suspense>} />
        <Route path='/terms-of-service' element={<Suspense fallback={<div>...</div>}> <TermsOfService/> </Suspense>} />
        <Route path='/browse-courses' element={<Suspense fallback={<div>...</div>}> <Courses/> </Suspense>} />
        <Route path='/courses-details' element={<Suspense fallback={<div>...</div>}> <CoursesDetails/> </Suspense>} />
        <Route path='/cart' element={<Suspense fallback={<div>...</div>}> <Cart/> </Suspense>} />
        <Route path='/premium-courses' element={<Suspense fallback={<div>...</div>}> <PremiumCourses/> </Suspense>} />
        <Route path='/about-us' element={<Suspense fallback={<div>...</div>}> <AboutUs/> </Suspense>} />
        <Route path='/how-it-works' element={<Suspense fallback={<div>...</div>}> <HowItWorks/> </Suspense>} />
        <Route path='/contact-us' element={<Suspense fallback={<div>...</div>}> <ContactUs/> </Suspense>} />
        <Route path='/learner/dashboard' element={<Suspense fallback={<div>...</div>}> <LearnerDashboard/> </Suspense>} />
        <Route path='/learner/subscription' element={<Suspense fallback={<div>...</div>}> <Subscription/> </Suspense>} />
        <Route path='/learner/order-history' element={<Suspense fallback={<div>...</div>}> <OrderHistory/> </Suspense>} />
        <Route path='/learner/my-courses' element={<Suspense fallback={<div>...</div>}> <MyCourses/> </Suspense>} />
        <Route path='/learner/updateprofile' element={<Suspense fallback={<div>...</div>}> <UpdateProfile/> </Suspense>} />
        <Route path='/ambessador/ambassador-subscription' element={<Suspense fallback={<div>...</div>}> <AmbassadorSubscription/> </Suspense>} />
        <Route path='/ambessador/ambassador-update' element={<Suspense fallback={<div>...</div>}> <AmbassadorUpdateProfile/> </Suspense>} />
        <Route path='/ambessador/dashboard' element={<Suspense fallback={<div>...</div>}> <AmbassadorDashboard/> </Suspense>} />
        <Route path='/ambessador/dashboard/success' element={<Suspense fallback={<div>...</div>}> <AmbassadorDashboard/> </Suspense>} />
        <Route path='/ambessador/dashboard/cancel' element={<Suspense fallback={<div>...</div>}> <AmbassadorDashboard/> </Suspense>} />
        <Route path='/ambessador/dashboard/notify' element={<Suspense fallback={<div>...</div>}> <AmbassadorDashboard/> </Suspense>} />
        <Route path='/owner/dashboard' element={<Suspense fallback={<div>...</div>}> <Ownerdashboard/> </Suspense>} />
        <Route path='/admin/login' element={<Suspense fallback={<div>...</div>}> <AdminLogin/> </Suspense>} />
        <Route path='/admin/admin-dashboard' element={<Suspense fallback={<div>...</div>}> <AdminDashboard/> </Suspense>} />
        <Route path='/admin/subscription' element={<Suspense fallback={<div>...</div>}> <AdminSubscription/> </Suspense>} />
        <Route path='/admin/active-agents' element={<Suspense fallback={<div>...</div>}> <AdminActiveAgents/> </Suspense>} />
        <Route path='/admin/active-subscribed-ambassador' element={<Suspense fallback={<div>...</div>}> <ActiveSubscribedAmbassador/> </Suspense>} />
        <Route path='/admin/active-subscribed-subscriber' element={<Suspense fallback={<div>...</div>}> <ActiveSubscribedSubscriber/> </Suspense>} />
        <Route path='/admin/defaulted-subscription-paymentof-ambassador' element={<Suspense fallback={<div>...</div>}> <DefaultedPaymentOfAmbassador/> </Suspense>} />
        <Route path='/admin/defaulted-subscription-paymentof-subscriber' element={<Suspense fallback={<div>...</div>}> <DefaultedPaymentOfSubscriber/> </Suspense>} />
        <Route path='/admin/subscription-cancelledby-ambassador' element={<Suspense fallback={<div>...</div>}> <CancelSubscriptionByAmbassador/> </Suspense>} />
        <Route path='/admin/subscription-cancelledby-subscriber' element={<Suspense fallback={<div>...</div>}> <CancelSubscriptionBySubscriber/> </Suspense>} />
        <Route path='/admin/active-inactive-referral-per-ambassador' element={<Suspense fallback={<div>...</div>}> <ReferralPerAmbassador/> </Suspense>} />
        <Route path='/admin/active-referral-per-ambassador' element={<Suspense fallback={<div>...</div>}> <ActiveReferralPerAmbassador/> </Suspense>} />
        <Route path='/admin/inactive-referral-per-ambassador' element={<Suspense fallback={<div>...</div>}> <InactiveReferralPerAmbassador/> </Suspense>} />
        <Route path='/admin/payment-due-to-ambassador' element={<Suspense fallback={<div>...</div>}> <PaymentDueToAmbassador/> </Suspense>} />
      </Routes>

    </>
  )
}


export const AdminRoutes = () => {
  return (
    <>
      <Routes>
      <Route path='/admin/login' element={<Suspense fallback={<div>...</div>}> <AdminLogin/></Suspense>} />
      <Route path='/admin/admin-dashboard' element={<Suspense fallback={<div>...</div>}> <AdminDashboard/></Suspense>} />
      <Route path='/admin/subscription' element={<Suspense fallback={<div>...</div>}> <AdminSubscription/></Suspense>} />
      <Route path='/admin/active-agents' element={<Suspense fallback={<div>...</div>}> <AdminActiveAgents/></Suspense>} />
      <Route path='/admin/active-subscribed-ambassador' element={<Suspense fallback={<div>...</div>}> <ActiveSubscribedAmbassador/></Suspense>} />
      <Route path='/admin/active-subscribed-subscriber' element={<Suspense fallback={<div>...</div>}> <ActiveSubscribedSubscriber/></Suspense>} />
      <Route path='/admin/defaulted-subscription-paymentof-ambassador' element={<Suspense fallback={<div>...</div>}> <DefaultedPaymentOfAmbassador/></Suspense>} />
      <Route path='/admin/defaulted-subscription-paymentof-subscriber' element={<Suspense fallback={<div>...</div>}> <DefaultedPaymentOfSubscriber/></Suspense>} />
      <Route path='/admin/subscription-cancelledby-ambassador' element={<Suspense fallback={<div>...</div>}> <CancelSubscriptionByAmbassador/></Suspense>} />
      <Route path='/admin/subscription-cancelledby-subscriber' element={<Suspense fallback={<div>...</div>}> <CancelSubscriptionBySubscriber/></Suspense>} />
      <Route path='/admin/active-inactive-referral-per-ambassador' element={<Suspense fallback={<div>...</div>}> <ReferralPerAmbassador/></Suspense>} />
      <Route path='/admin/active-referral-per-ambassador' element={<Suspense fallback={<div>...</div>}> <ActiveReferralPerAmbassador/></Suspense>} />
      <Route path='/admin/inactive-referral-per-ambassador' element={<Suspense fallback={<div>...</div>}> <InactiveReferralPerAmbassador/></Suspense>} />
      <Route path='/admin/payment-due-to-ambassador' element={<Suspense fallback={<div>...</div>}> <PaymentDueToAmbassador/></Suspense>} />
      </Routes>
    </>
  )
}