import * as Yup from 'yup';

export default Yup.object().shape({
    //name: Yup.string().required("Name is required").min(2, 'Name is too short - should be 2 chars minimum.').max(80, 'Name is too long - should be 80 chars maximum.'),
    first_name: Yup.string().required("First Name is required").max(80, 'name is too long - should be 80 chars maximum.'),
    surname: Yup.string().required("Surname is required").max(80, 'Surname is too long - should be 80 chars maximum.'),
    email: Yup.string().email().required("Email is required"),
    mobile_number: Yup.string()
          .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
          .required('Mobile number is required'),
    query: Yup.string().required("Query is reuired."),
    
})