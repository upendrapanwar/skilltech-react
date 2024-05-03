const apiUrl = "active-subscribed-ambassador";
var columnsData = [
    {
      name: "AMBASSADOR FIRST NAME",
      selector: (row, i) => row.firstname,
      cell: (row) => <span>{row.firstname}</span>,
      sortable: true,
    },
    {
      name: "AMBASSADOR LAST NAME",
      selector: (row, i) => row.surname,
      cell: (row) => <span>{row.surname}</span>,
      sortable: true,
    },  
    { 
      name: "AMBASSADOR REFERRAL CODE",
      selector: (row, i) => row.referral_code,
      cell: (row) => <span>{row.referral_code}</span>,
      sortable: true,
    },
    {
        name: "DATE OF HVG SUBSCRIPTION",
        selector: (row, i) => row.subscription_date,
        cell: (row) => {
          const date = new Date(row.subscription_date);
          const day = date.getDate();
          const month = date.toLocaleString('en-us', { month: 'short' });
          const year = date.getFullYear();
          const formattedDate = `${day} ${month}, ${year}`;
          return <span>{formattedDate}</span>;
        },
        sortable: true,
      },
      
    {
      name: "SUBSCRIPTION STATUS",
      selector: (row, i) => row.subscription_status,
      cell: (row) => <span>{row.subscription_status}</span>,
      sortable: true,
    },
    {
      name: "DATE OF AMBASSADOR SIGN UP",
      selector: (row, i) => row.ambassador_date,
      cell: (row) => {
        const date = new Date(row.ambassador_date);
        const day = date.getDate();
        const month = date.toLocaleString('en-us', { month: 'short' });
        const year = date.getFullYear();
        const formattedDate = `${day} ${month}, ${year}`;
        return <span>{formattedDate}</span>;
      },
      sortable: true,
    },
  ];

  const apiUrl = "active-subscribed-subscriber";
  var columnsData = [
    {
      name: "FIRST NAME",
      selector: (row, i) => row.firstname,
      cell: (row) => <span>{row.firstname}</span>,
      sortable: true,
    },
    {
      name: "LAST NAME",
      selector: (row, i) => row.surname,
      cell: (row) => <span>{row.surname}</span>,
      sortable: true,
    },
    {
        name: "DATE OF HVG SUBSCRIPTION",
        selector: (row, i) => row.subscription_date,
        cell: (row) => {
          const date = new Date(row.subscription_date);
          const day = date.getDate();
          const month = date.toLocaleString('en-us', { month: 'short' });
          const year = date.getFullYear();
          const formattedDate = `${day} ${month}, ${year}`;
          return <span>{formattedDate}</span>;
        },
        sortable: true,
      },
      
    {
      name: "SUBSCRIPTION STATUS",
      selector: (row, i) => row.subscription_status,
      cell: (row) => <span>{row.subscription_status}</span>,
      sortable: true,
    },
    // {
    //   name: "DATE OF AMBASSADOR SIGN UP",
    //   selector: (row, i) => row.ambassador_date,
    //   cell: (row) => <span>{row.ambassador_date}</span>,
    //   sortable: true,
    // },
  ];

  const apiUrl = "defaulted-subscription-paymentof-ambassador";
  var columnsData = [
    {
        name: "AMBASSADOR FIRST NAME",
        selector: (row, i) => row.Ambassador_firstname,
        cell: (row) => row.Ambassador_firstname,
        sortable: true,
      },
      {
        name: "AMBASSADOR LAST NAME",
        selector: (row, i) => row.Ambassador_lastname,
        cell: (row) => row.Ambassador_lastname,
        sortable: true,
      },
      {
        name: "AMBASSADOR REFERRAL CODE",
        selector: (row, i) => row.referral_code,
        cell: (row) => <span>{row.referral_code}</span>,
        sortable: true,
      },              
    {
      name: "PAIMENT FAILURE REASON",
      selector: (row, i) => row.payment_status,
      cell: (row) => <span>{row.payment_status === "cancel" ? "Payment failed" : "Payment not done"}</span>,
      sortable: true,
    },
  ];


  const apiUrl = "defaulted-subscription-paymentof-subscriber";
  var columnsData = [
    {
      name: "SUBSCRIBER FIRST NAME",
      selector: (row, i) => row.Subscriber_firstname,
      cell: (row) => <span>{row.Subscriber_firstname}</span>,
      sortable: true,
    },
    {
      name: "SUBSCRIBER LAST NAME",
      selector: (row, i) => row.Subscriber_lastname,
      cell: (row) => <span>{row.Subscriber_lastname}</span>,
      sortable: true,
    },   
    {
      name: "PAYMENT FAILURE REASON",
      selector: (row, i) => row.payment_status,
      cell: (row) => <span>{row.payment_status === "cancel" ? "Payment failed" : "Payment not done"}</span>,
      sortable: true,
    },
  ];


  const apiUrl = "subscription-cancelledby-ambassador";
  var columnsData = [
    {
        name: "AMBASSADOR FIRST NAME",
        selector: (row, i) => row.Ambassador_firstname,
        cell: (row) => row.Ambassador_firstname,
        sortable: true,
      },
      {
        name: "AMBASSADOR LAST NAME",
        selector: (row, i) => row.Ambassador_lastname,
        cell: (row) => row.Ambassador_lastname,
        sortable: true,
      },
      {
        name: "AMBASSADOR REFERRAL CODE",
        selector: (row, i) => row.referral_code,
        cell: (row) => <span>{row.referral_code}</span>,
        sortable: true,
      },
    {
        name: "DATE OF HVG SUBSCRIPTION CALCELLATION",
        selector: (row, i) => row.subscription_cancellation_date,
        cell: (row) => {
          const date = new Date(row.subscription_cancellation_date);
          const day = date.getDate();
          const month = date.toLocaleString('en-us', { month: 'short' });
          const year = date.getFullYear();
          const formattedDate = `${day} ${month}, ${year}`;
          return <span>{formattedDate}</span>;
        },
        sortable: true,
      },
  ];



  const apiUrl = "subscription-cancelledby-subscriber";
  var columnsData = [
    {
      name: "SUBSCRIBER FIRST NAME",
      selector: (row, i) => row.Subscriber_firstname,
      cell: (row) => <span>{row.Subscriber_firstname}</span>,
      sortable: true,
    },
    {
      name: "SUBSCRIBER LAST NAME",
      selector: (row, i) => row.Subscriber_lastname,
      cell: (row) => <span>{row.Subscriber_lastname}</span>,
      sortable: true,
    },  
    {
        name: "DATE OF HVG SUBSCRIPTION CANCELLATION",
        selector: (row, i) => row.cancellation_date,
        cell: (row) => {
          const date = new Date(row.cancellation_date);
          const day = date.getDate();
          const month = date.toLocaleString('en-us', { month: 'short' });
          const year = date.getFullYear();
          const formattedDate = `${day} ${month}, ${year}`;
          return <span>{formattedDate}</span>;
        },
        sortable: true,
      },
  ];




  const apiUrl = "active-inactive-referral-per-ambassador";
  var columnsData = [
    {
      name: "SUBSCRIBER FIRST NAME",
      selector: (row, i) => row.Subscriber_firstname,
      cell: (row) => <span>{row.Subscriber_firstname}</span>,
      sortable: true,
    },
    {
      name: "SUBSCRIBER LAST NAME",
      selector: (row, i) => row.Subscriber_lastname,
      cell: (row) => <span>{row.Subscriber_lastname}</span>,
      sortable: true,
    },  
    {
      name: "AMBASSADOR REFERRAL CODE USED",
      selector: (row, i) => row.referral_code,
      cell: (row) => <span>{row.referral_code}</span>,
      sortable: true,
    },
    {
        name: "AMBASSADOR FIRST NAME",
        selector: (row, i) => row.Ambassador_firstname,
        cell: (row) => row.Ambassador_firstname,
        sortable: true,
      },
      {
        name: "AMBASSADOR LAST NAME",
        selector: (row, i) => row.Ambassador_lastname,
        cell: (row) => row.Ambassador_lastname,
        sortable: true,
      },
    {
        name: "DATE OF USE OF REFERRAL USED",
        selector: (row, i) => row.Date_of_use_of_referral_code,
        cell: (row) => {
          const date = new Date(row.Date_of_use_of_referral_code);
          const day = date.getDate();
          const month = date.toLocaleString('en-us', { month: 'short' });
          const year = date.getFullYear();
          const formattedDate = `${day} ${month}, ${year}`;
          return <span>{formattedDate}</span>;
        },
        sortable: true,
      },
      
    {
      name: "HVG SUBSCRIPTION STATUS",
      selector: (row, i) => row.HVG_Subscription_status,
      cell: (row) => <span>{row.HVG_Subscription_status}</span>,
      sortable: true,
    },
  ];


  const apiUrl = "active-referral-per-ambassador";
  var columnsData = [
    {
      name: "SUBSCRIBER FIRST NAME",
      selector: (row, i) => row.Subscriber_firstname,
      cell: (row) => <span>{row.Subscriber_firstname}</span>,
      sortable: true,
    },
    {
      name: "SUBSCRIBER LAST NAME",
      selector: (row, i) => row.Subscriber_lastname,
      cell: (row) => <span>{row.Subscriber_lastname}</span>,
      sortable: true,
    },  
    {
      name: "AMBASSADOR REFERRAL CODE USED",
      selector: (row, i) => row.referral_code,
      cell: (row) => <span>{row.referral_code}</span>,
      sortable: true,
    },
    {
        name: "AMBASSADOR FIRST NAME",
        selector: (row, i) => row.Ambassador_firstname,
        cell: (row) => row.Ambassador_firstname,
        sortable: true,
      },
      {
        name: "AMBASSADOR LAST NAME",
        selector: (row, i) => row.Ambassador_lastname,
        cell: (row) => row.Ambassador_lastname,
        sortable: true,
      },
    {
        name: "DATE OF USE OF REFERRAL USED",
        selector: (row, i) => row.Date_of_use_of_referral_code,
        cell: (row) => {
          const date = new Date(row.Date_of_use_of_referral_code);
          const day = date.getDate();
          const month = date.toLocaleString('en-us', { month: 'short' });
          const year = date.getFullYear();
          const formattedDate = `${day} ${month}, ${year}`;
          return <span>{formattedDate}</span>;
        },
        sortable: true,
      },
  ];




  const apiUrl = "inactive-referral-per-ambassador";
  var columnsData = [
    {
      name: "SUBSCRIBER FIRST NAME",
      selector: (row, i) => row.Subscriber_firstname,
      cell: (row) => <span>{row.Subscriber_firstname}</span>,
      sortable: true,
    },
    {
      name: "SUBSCRIBER LAST NAME",
      selector: (row, i) => row.Subscriber_lastname,
      cell: (row) => <span>{row.Subscriber_lastname}</span>,
      sortable: true,
    },  
    {
      name: "AMBASSADOR REFERRAL CODE USED",
      selector: (row, i) => row.referral_code,
      cell: (row) => <span>{row.referral_code}</span>,
      sortable: true,
    },
    {
        name: "AMBASSADOR FIRST NAME",
        selector: (row, i) => row.Ambassador_firstname,
        cell: (row) => row.Ambassador_firstname,
        sortable: true,
      },
      {
        name: "AMBASSADOR LAST NAME",
        selector: (row, i) => row.Ambassador_lastname,
        cell: (row) => row.Ambassador_lastname,
        sortable: true,
      },
    {
        name: "DATE OF USE OF REFERRAL USED",
        selector: (row, i) => row.Date_of_use_of_referral_code,
        cell: (row) => {
          const date = new Date(row.Date_of_use_of_referral_code);
          const day = date.getDate();
          const month = date.toLocaleString('en-us', { month: 'short' });
          const year = date.getFullYear();
          const formattedDate = `${day} ${month}, ${year}`;
          return <span>{formattedDate}</span>;
        },
        sortable: true,
      },
  ];



  const apiUrl = "payment-due-to-ambassador";
  var columnsData = [
    {
        name: "AMBASSADOR FIRST NAME",
        selector: (row, i) => row.Ambassador_firstname,
        cell: (row) => row.Ambassador_firstname,
        sortable: true,
      },
      {
        name: "AMBASSADOR LAST NAME",
        selector: (row, i) => row.Ambassador_lastname,
        cell: (row) => row.Ambassador_lastname,
        sortable: true,
      },
      {
        name: "AMBASSADOR REFERRAL CODE",
        selector: (row, i) => row.Ambassador_referralcode,
        cell: (row) => <span>{row.Ambassador_referralcode}</span>,
        sortable: true,
      },
    {
      name: "CURRENT ACTIVE REFERRAL",
      selector: (row, i) => row.referral_count,
      cell: (row) => <span>{row.referral_count}</span>,
      sortable: true,
    },
    {
      name: "TOTAL AMOUNT DUE THIS MONTH",
      selector: (row, i) => row.due_amount,
      cell: (row) => <span>{row.due_amount}</span>,
      sortable: true,
    },
  ];

/**************************************************************************************** */


  const ambassadorFirstName = {
    name: "AMBASSADOR FIRST NAME",
    selector: (row, i) => row.firstname || row.Ambassador_firstname,
    cell: (row) => <span>{row.firstname || row.Ambassador_firstname}</span>,
    sortable: true,
  }
const ambassadorLastName = {
    name: "AMBASSADOR LAST NAME",
    selector: (row, i) => row.surname || row.Ambassador_lastname,
    cell: (row) => <span>{row.surname || row.Ambassador_lastname}</span>,
    sortable: true,
  }
const ambassadorReferralCode = { 
    name: "AMBASSADOR REFERRAL CODE",
    selector: (row, i) => row.referral_code || row.Ambassador_referralcode,
    cell: (row) => <span>{row.referral_code || row.Ambassador_referralcode}</span>,
    sortable: true,
  }
const ambassadorReferralCodeUsed = {
    name: "AMBASSADOR REFERRAL CODE USED",
    selector: (row, i) => row.referral_code,
    cell: (row) => <span>{row.referral_code}</span>,
    sortable: true,
  }
const dateOfReferralCodeUsed = {
    name: "DATE OF USE OF REFERRAL USED",
    selector: (row, i) => row.Date_of_use_of_referral_code,
    cell: (row) => {
      const date = new Date(row.Date_of_use_of_referral_code);
      const day = date.getDate();
      const month = date.toLocaleString('en-us', { month: 'short' });
      const year = date.getFullYear();
      const formattedDate = `${day} ${month}, ${year}`;
      return <span>{formattedDate}</span>;
    },
    sortable: true,
  }
const dateOfHVGSubscriptionAmbassador = {
    name: "DATE OF HVG SUBSCRIPTION",
    selector: (row, i) => row.subscription_date,
    cell: (row) => {
      const date = new Date(row.subscription_date);
      const day = date.getDate();
      const month = date.toLocaleString('en-us', { month: 'short' });
      const year = date.getFullYear();
      const formattedDate = `${day} ${month}, ${year}`;
      return <span>{formattedDate}</span>;
    },
    sortable: true,
  }
  const paymentFailureReason = {
    name: "PAIMENT FAILURE REASON",
    selector: (row, i) => row.payment_status,
    cell: (row) => <span>{row.payment_status === "cancel" ? "Payment failed" : "Payment not done"}</span>,
    sortable: true,
  }
const subscriptionStatus = {
    name: "SUBSCRIPTION STATUS",
    selector: (row, i) => row.subscription_status,
    cell: (row) => <span>{row.subscription_status}</span>,
    sortable: true,
  }
const hvgSubscriptionStatus = {
    name: "HVG SUBSCRIPTION STATUS",
    selector: (row, i) => row.HVG_Subscription_status,
    cell: (row) => <span>{row.HVG_Subscription_status}</span>,
    sortable: true,
  }
const dateOfHVGSubscriptionCancellation = {
    name: "DATE OF HVG SUBSCRIPTION CALCELLATION",
    selector: (row, i) => row.subscription_cancellation_date || row.cancellation_date,
    cell: (row) => {
      const date = new Date(row.subscription_cancellation_date || row.cancellation_date);
      const day = date.getDate();
      const month = date.toLocaleString('en-us', { month: 'short' });
      const year = date.getFullYear();
      const formattedDate = `${day} ${month}, ${year}`;
      return <span>{formattedDate}</span>;
    },
    sortable: true,
  }
const dateOfAmbassadorSignup = {
    name: "DATE OF AMBASSADOR SIGN UP",
    selector: (row, i) => row.ambassador_date,
    cell: (row) => {
      const date = new Date(row.ambassador_date);
      const day = date.getDate();
      const month = date.toLocaleString('en-us', { month: 'short' });
      const year = date.getFullYear();
      const formattedDate = `${day} ${month}, ${year}`;
      return <span>{formattedDate}</span>;
    },
    sortable: true,
  }
  const currentActiveReferral = {
    name: "CURRENT ACTIVE REFERRAL",
    selector: (row, i) => row.referral_count,
    cell: (row) => <span>{row.referral_count}</span>,
    sortable: true,
  }
  const totalAmountDueThisMonth = {
    name: "TOTAL AMOUNT DUE THIS MONTH",
    selector: (row, i) => row.due_amount,
    cell: (row) => <span>{row.due_amount}</span>,
    sortable: true,
  }

  const subscriberFirstName = {
    name: "SUBSCRIBER FIRST NAME",
    selector: (row, i) => row.firstname || row.Subscriber_firstname,
    cell: (row) => <span>{row.firstname || row.Subscriber_firstname}</span>,
    sortable: true,
  }

  const subscriberLastName = {
    name: "SUBSCRIBER LAST NAME",
    selector: (row, i) => row.surname || row.Subscriber_lastname,
    cell: (row) => <span>{row.surname || row.Subscriber_lastname}</span>,
    sortable: true,
  }

  const dateOfHVGSubscriptionSubscriber = {
    name: "DATE OF HVG SUBSCRIPTION",
    selector: (row, i) => row.subscription_date,
    cell: (row) => {
      const date = new Date(row.subscription_date);
      const day = date.getDate();
      const month = date.toLocaleString('en-us', { month: 'short' });
      const year = date.getFullYear();
      const formattedDate = `${day} ${month}, ${year}`;
      return <span>{formattedDate}</span>;
    },
    sortable: true,
  }