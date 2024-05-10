/** Icons are imported separatly to reduce build time */
import BellIcon from '@heroicons/react/24/outline/BellIcon'
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon'
import WalletIcon from '@heroicons/react/24/outline/WalletIcon'
import CodeBracketSquareIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon'
import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon'
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon'
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon'
import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import BoltIcon from '@heroicons/react/24/outline/BoltIcon'
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon'
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import KeyIcon from '@heroicons/react/24/outline/KeyIcon'
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon'

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/admin/admin-dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Dashboard',
  },
  // {
  //   path: '/admin/leads', // url
  //   icon: <InboxArrowDownIcon className={iconClasses}/>, // icon component
  //   name: 'Leads', // name that appear in Sidebar
  // },
  // {
  //   path: '/admin/subscription', // url
  //   icon: <CurrencyDollarIcon className={iconClasses}/>, // icon component
  //   name: 'Subscriptions', // name that appear in Sidebar
  // },
  // {
  //   path: '/admin/active-agents', // url
  //   icon: <UserIcon className={submenuIconClasses}/>, // icon component
  //   name: 'ActiveAgents', // name that appear in Sidebar
  // },
  //{
  //  path: '/admin/charts', // url
  //  icon: <ChartBarIcon className={iconClasses}/>, // icon component
  //  name: 'Analytics', // name that appear in Sidebar
  //},
  //{
  //  path: '/admin/integration', // url
  //  icon: <BoltIcon className={iconClasses}/>, // icon component
  //  name: 'Integration', // name that appear in Sidebar
  //},
  //{
  //  path: '/admin/calendar', // url
  //  icon: <CalendarDaysIcon className={iconClasses}/>, // icon component
  //  name: 'Calendar', // name that appear in Sidebar
  //},



//REPORTS
  // {
  //   path: '', //no url needed as this has submenu
  //   icon: <ChartBarIcon className={iconClasses}/>, // icon component
  //   name: 'Reports', // name that appear in Sidebar
  //   submenu : [
  //     {
  //       path: '/admin/active-subscribed-ambassador',
  //       icon: <DocumentIcon className={submenuIconClasses}/>,
  //       name: 'Active Subscritpion of Ambassador',
  //     },
  //     {
  //       path: '/admin/active-subscribed-subscriber',
  //       icon: <DocumentIcon className={submenuIconClasses}/>,
  //       name: 'Active Subscription of Subscriber',
  //     },
  //     {
  //       path: '/admin/defaulted-subscription-paymentof-ambassador',
  //       icon: <DocumentIcon className={submenuIconClasses}/>,
  //       name: 'Defaulted Subscription payment of Ambassador',
  //     },
  //     {
  //       path: '/admin/defaulted-subscription-paymentof-subscriber',
  //       icon: <DocumentIcon className={submenuIconClasses}/>,
  //       name: 'Defaulted Subscription pyament of Subscriber',
  //     },
  //     {
  //       path: '/admin/subscription-cancelledby-ambassador',
  //       icon: <DocumentIcon className={submenuIconClasses}/>,
  //       name: 'Cancellation of Subscription-by Ambassador',
  //     },
  //     {
  //       path: '/admin/subscription-cancelledby-subscriber',
  //       icon: <DocumentIcon className={submenuIconClasses}/>,
  //       name: 'Cancellation of Subscriptioin-by Subscriber',
  //     },
  //     {
  //       path: '/admin/active-inactive-referral-per-ambassador',
  //       icon: <DocumentIcon className={submenuIconClasses}/>,
  //       name: 'Referral Per Ambassador',
  //     },
  //     {
  //       path: '/admin/active-referral-per-ambassador',
  //       icon: <DocumentIcon className={submenuIconClasses}/>,
  //       name: 'Active Referral Per Ambassador',
  //     },
  //     {
  //       path: '/admin/inactive-referral-per-ambassador',
  //       icon: <DocumentIcon className={submenuIconClasses}/>,
  //       name: 'Inactive Referral Per Ambassador',
  //     },
  //     {
  //       path: '/admin/payment-due-to-ambassador',
  //       icon: <DocumentIcon className={submenuIconClasses}/>,
  //       name: 'Payment due to ambassador',
  //     },
  //   ]
  // },




  //{
  //  path: '', //no url needed as this has submenu
  //  icon: <DocumentDuplicateIcon className={`${iconClasses} inline` }/>, // icon component
  //  name: 'Pages', // name that appear in Sidebar
  //  submenu : [
  //    {
  //      path: '/login',
  //      icon: <ArrowRightOnRectangleIcon className={submenuIconClasses}/>,
  //      name: 'Login',
  //    },
  //   {
  //      path: '/register', //url
  //      icon: <UserIcon className={submenuIconClasses}/>, // icon component
  //      name: 'Register', // name that appear in Sidebar
  //    },
  //    {
  //      path: '/forgot-password',
  //      icon: <KeyIcon className={submenuIconClasses}/>,
  //      name: 'Forgot Password',
  //    },
  //    {
  //      path: '/admin/blank',
  //      icon: <DocumentIcon className={submenuIconClasses}/>,
  //      name: 'Blank Page',
  //    },
  //    {
  //      path: '/admin/404',
  //      icon: <ExclamationTriangleIcon className={submenuIconClasses}/>,
  //      name: '404',
 //     },
  //  ]
  //},
  //{
  //  path: '', //no url needed as this has submenu
  //  icon: <Cog6ToothIcon className={`${iconClasses} inline` }/>, // icon component
  //  name: 'Settings', // name that appear in Sidebar
  //  submenu : [
  //    {
  //      path: '/admin/settings-profile', //url
  //      icon: <UserIcon className={submenuIconClasses}/>, // icon component
  //      name: 'Profile', // name that appear in Sidebar
  //    },
  //    {
  //      path: '/admin/settings-billing',
  //      icon: <WalletIcon className={submenuIconClasses}/>,
  //      name: 'Billing',
  //    },
  //    {
  //      path: '/admin/settings-team', // url
  //      icon: <UsersIcon className={submenuIconClasses}/>, // icon component
  //      name: 'Team Members', // name that appear in Sidebar
  //    },
  //  ]
  //},
  //{
  //  path: '', //no url needed as this has submenu
  //  icon: <DocumentTextIcon className={`${iconClasses} inline` }/>, // icon component
  //  name: 'Documentation', // name that appear in Sidebar
  //  submenu : [
  //    {
  //      path: '/admin/getting-started', // url
  //      icon: <DocumentTextIcon className={submenuIconClasses}/>, // icon component
  //      name: 'Getting Started', // name that appear in Sidebar
  //    },
  //    {
  //      path: '/admin/features',
  //      icon: <TableCellsIcon className={submenuIconClasses}/>, 
  //      name: 'Features',
 //     },
  //    {
  //      path: '/admin/components',
  //      icon: <CodeBracketSquareIcon className={submenuIconClasses}/>, 
  //      name: 'Components',
  //    }
  //  ]
  //},
  
]

export default routes


